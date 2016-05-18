class ImageLoader {
  constructor() {
    this.store = [];
  }

  load(imageObj) {
    let counter = 0;
    let total = 0;

    return new Promise((resolve, reject) => {
      Object.getOwnPropertyNames(imageObj).forEach(imgObj => {
        total ++;
        const img = new Image();

        img.src = imageObj[imgObj];

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
