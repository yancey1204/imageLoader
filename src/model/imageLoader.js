class ImageLoader {
  constructor() {
    this.store = [];
  }

  getImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.src = src;
      img.onload = () => {
        console.log('onloading');
        resolve(img);
      };

      img.onerror = () => {
        console.log('onerror');
        reject(new Error(`image load failed: ${src}`));
      };
    });
  }
}

export default ImageLoader;
