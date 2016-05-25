import { expect } from 'chai';
import { describe, it } from 'mocha';
import ImageLoader from '../../src/model/imageLoader';
import jsdom from 'mocha-jsdom';
import sinon from 'sinon';


describe('imageloader', () => {
  jsdom();
  it('should return img obj if succeed', () => {
    const loader = new ImageLoader();
    const src = '../img/cube.jpg';
    const progressSpy = sinon.stub(loader, 'getImage');

    loader.getImage(src)
      .then((img) => {
        console.log(111);
        console.log(img);
        expect(img).to.be.an('object');
        progressSpy.should.have.been.called;
      }, (err) => {
        console.log(err);
      });
  });
});

describe('mocha tests', () => {
  it('has document', () => {
    const div = document.createElement('div');
    expect(div.nodeName).eql('DIV');
  });
});
