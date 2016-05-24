import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import ImageLoader from '../../src/model/imageLoader';
import sinon from 'sinon';

describe('imageloader', () => {
  let loader;

  beforeEach(() => {
    loader = new ImageLoader();
  });

  it('should initialize an empty store', () => {
    expect(loader.store.length).to.be.empty;
  });

  describe('promise', () => {
    it('should return img obj if succeed', () => {
      const src = './img/cube.jpg';

      loader.getImage(src)
        .then((img) => {
          console.log(111);
          console.log(img);
          expect(img).to.be.an('object');
        })
        .catch((msg) => {
          console.log(msg);
        });
    });
  });
});
