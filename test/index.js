import expect from 'expect';
import { linkType, get } from '../lib';

const TEST_FILE = './test/samples/test_file.txt';

describe('linkType', function () {

  it('Handle urls', function () {
    expect(linkType('http://www.google.com')).toEqual('url');
  });

  it('Handle files', function () {
    expect(linkType(TEST_FILE)).toEqual('file');
  });

  it('Reject invalid links', function () {
    let fileError = linkType('i_do_not_exists.txt');
    let folderError = linkType('lib');
    let urlError = linkType('http:/invalidurl.com');
    expect(fileError).toEqual(false);
    expect(urlError).toEqual(false);
    expect(folderError).toEqual(false);
  });
});

describe('get', function () {

  it('Handle urls', function () {
    get('http://google.com').then((e) => {
      expect(e, /.*/);
    });
  });

  it('Handle files', function () {
    get(TEST_FILE).then((e) => {
      expect(e, 'Hello world');
    });
  });

  it('Throw exception on directory', function () {
    expect(function () {
      get('lib');
    }).toThrow(/Unable to detect type of/);
  });

  it('Throw exception on invalid file', function () {
    expect(function () {
      get('i_do_not_exists.txt');
    }).toThrow(/Unable to detect type of/);
  });

  it('Throw exception on invalid url', function () {
    expect(function () {
      get('http:/invalidurl.com');
    }).toThrow(/Unable to detect type of/);
  });

  it('Reject on invalid url', function () {
    let errorHandler = expect.createSpy(function (e) {
      expect(e.statusCode).toEqual(404);
    });
    Promise.all([get('https://github.com/lambda2/get-content/blob/master/not-exists').catch(errorHandler)])
    .then(function () {
      expect(errorHandler).toHaveBeenCalled();
    });

  });
});
