const url = require('is-url');
const fs = require('fs');
const Promise = require('promise');
const rp = require('request-promise');

/**
 *
 *
 */
let linkType = (link) => {
  const formatedLink = link.replace(/^unix:/, 'http://unix:');
  try {
    if (url(formatedLink)) {
      return 'url';
    } else if (fs.lstatSync(formatedLink).isFile()) {
      return 'file';
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

/**
 *
 *
 */
let get = (link) => {
  let type = linkType(link);

  switch (type) {
  case 'url':
    return rp(link);
  case 'file':
    return new Promise(function (fulfill, reject) {
      fs.readFile(link, 'utf-8', function (err, res){
        if (err) {
          reject(err);
        } else {
          fulfill(res);
        }
      });
    });
  default:
    throw new Error(`Unable to detect type of ${link}`);
  }
};

export default { linkType: linkType, get: get };
