import ImgCtrl from './controller/imageLoaderController';

document.addEventListener('DOMContentLoaded', () => {
  const imgCtrl = new ImgCtrl();
  imgCtrl.loadImage();
});
