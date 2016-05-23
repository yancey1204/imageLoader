import ImageLoader from '../model/imageLoader';
import ImageView from '../view/imageView.js';

class ImageLoaderCtrl {
  initialize() {
    return {
      cube: './img/cube.jpg',
      vase: './img/vase.jpg',
    };
  }

  loadImage() {
    const imgLoader = new ImageLoader();
    const imgView = new ImageView();
    const imageObj = this.initialize();

    imgLoader.load(imageObj)
      .then(images => {
        images.forEach(image => {
          imgView.renderImage(image);
        });
      }, msg => {
        imgView.renderError(msg);
      });
  }
}

export default ImageLoaderCtrl;
