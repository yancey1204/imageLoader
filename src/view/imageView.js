class View {
  renderLoading() {
    const msg = document.createElement('p');
    msg.innerHTML = 'loading';
    document.body.appendChild(msg);
  }

  renderImage(imgObj) {
    document.body.appendChild(imgObj);
  }

  renderError(errMsg) {
    const msg = document.createElement('p');
    msg.innerHTML = `an error occured when loading images ${errMsg}`;
    document.body.appendChild(msg);
  }
}

export default View;
