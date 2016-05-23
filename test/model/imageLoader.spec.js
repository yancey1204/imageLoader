import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import ImageLoader from '../../src/model/imageLoader';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('imageloader', () => {
  it('should initialize an empty store', () => {
    const loader = new ImageLoader();

    expect(loader.store.length).to.be.empty;
  });

  describe('loader function', () => {
    it('should load image and return success promse', () => {
      const imagesObj = {
        cube: './img/cube.jpg',
        vase: './img/vase.jpg',
      };
      const loader = new ImageLoader();
      console.log('0000');
      const image = new Image();
      const newImage = sinon.spy(image);

      Promise.subscribe('message', newImage);
      Promise.publishSync('message');

      return loader.load(imagesObj).then((store) => {
        console.log(111);
        expect(store.length).to.equal(2);
        console.log(store);
        expect(store[0].src).to.equal('./img/cube.jpg');
        expect(store[1].src).to.equal('./img/vase.jpg');
      });
    });
  });
});
