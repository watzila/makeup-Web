class Ajax {
  //開始連線
  startListener(method, url, u) {
    this.oReq = new XMLHttpRequest();
    this.reqListener = this.reqListener.bind(this.oReq);
    this.oReq.onload = () => { this.reqListener(u) };
    this.oReq.open(method, 'http://localhost:3001' + url, true);
    this.oReq.send();
  }

  //接收結果
  reqListener(u) {
    const data = JSON.parse(this.responseText);
    u(data);
  }
}

export default Ajax;