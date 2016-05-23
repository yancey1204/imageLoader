class ImageLoader {
  constructor() {
    this.store = [];
  }

  load(imagesObj) {
    let counter = 0;
    let total = 0;

    return new Promise((resolve, reject) => {
      Object.getOwnPropertyNames(imagesObj).forEach(imgKey => {
        total ++;
        const img = new Image();

        img.src = imagesObj[imgKey];

        img.onload = () => {
          counter ++;
          this.store.push(img);
          if (counter === total) {
            resolve(this.store);
          }
        };

        img.onerror = () => {
          reject('error');
        };
      });
    });
  }
}

export default ImageLoader;
