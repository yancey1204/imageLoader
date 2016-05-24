import ImgCtrl from './controller/imageLoaderController';

document.addEventListener('DOMContentLoaded', () => {
  const imgCtrl = new ImgCtrl();
  const imagesObj = {
    cube: './img/cube.jpg',
    vase: './img/vase.jpg',
  };

  imgCtrl.load(imagesObj);
});
