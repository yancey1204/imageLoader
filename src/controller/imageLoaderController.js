import ImageLoader from '../model/imageLoader';
import ImageView from '../view/imageView.js';

class ImageLoaderCtrl {
  load(imagesObj) {
    const imagePromises = [];
    const imgView = new ImageView();
    const imageModel = new ImageLoader();

    Object.getOwnPropertyNames(imagesObj).forEach(imgKey => {
      imagePromises.push(imageModel.getImage(imagesObj[imgKey]));
    });

    Promise.all(imagePromises).then(images => {
      images.forEach(image => {
        imgView.renderImage(image);
      });
    }, msg => {
      imgView.renderError(msg);
    });
  }
}

export default ImageLoaderCtrl;
