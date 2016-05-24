class ImageLoader {
  constructor() {
    this.store = [];
  }

  getImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        resolve(img);
      };

      img.onerror = () => {
        reject(new Error(`image load failed: ${src}`));
      };

      img.src = src;
    });
  }
}

export default ImageLoader;
