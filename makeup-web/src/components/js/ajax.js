class Ajax {
  //連線
  //startListener(method, url, u, require = null) {
  //  this.xhr = new XMLHttpRequest();
  //  this.reqListener = this.reqListener.bind(this.xhr);
  //  this.xhr.onload = () => { this.reqListener(u) };
  //  this.xhr.open(method, 'http://localhost:3001' + url, true);
  //  this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //  this.xhr.send(require);
  //  //console.log(require)
  //}

  ////接收結果
  //reqListener(u) {
  //  console.log(this.responseText);
  //  //const data = JSON.parse(this.responseText);
  //  //u(data);
  //}

  startListener(method, url, u, require = {}) {
    fetch('http://localhost:3001' + url,
      {
        method: method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        //body: JSON.stringify(require)
      }).then(function (response) {
        //處理 response
        return response.json();
      }).then(function (data) {
        u(data);
        //console.log(data);
      })
  }
}

export default Ajax;