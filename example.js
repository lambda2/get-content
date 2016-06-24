const { linkType, get } = require("get-content");

const url = 'http://andral.kiwi';
const type = linkType(url);

console.log(type); // 'url'

get(url).then((pageContent) => {
  console.log(pageContent); // <html>\n\t<head>\n...'
}).catch((err) => {
  console.warn(err); // Something happen !
});
