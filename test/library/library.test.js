const library = require('../../app/model/library')(__dirname);
const path = require('path');
const should = require('should');
const fs = require('fs');

describe('test library functions', () => {
  it('cleanup', done => {
    fs.unlinkSync(path.join(__dirname, 'music-index.json'));
    fs.unlinkSync(path.join(__dirname, 'user-setting.json'));
    done();
  });
  it('creates library path', done => {
    should.equal(library.listLibraryPath().length, 0);
    library.addLibraryPath('/Users/yjq/Projects/electron-music/music');
    should.equal(library.listLibraryPath().length, 1);
    library.buildIndex();
    should(library.getContent().length).be.above(0);
    done();
  });
});
