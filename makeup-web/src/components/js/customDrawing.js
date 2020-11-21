class CustomDrawing {
  constructor() {
    this.imgCanvas = document.getElementById("previewIMG");//預覽圖畫布(客製顯示用)
    this.i = document.getElementById("img");

    this.ctx = this.imgCanvas.getContext("2d");
    this.img = new Image();
    this.img2 = new Image();
    this.img3 = new Image();
    this.img4 = new Image();

    this.img.onload = () => { this.drawIMG(); }

    this.init();
  }

  //客製化初始化
  init() {
    this.img.src = "../images/product1/產品1.png";
    this.img3.src = "../images/product1/高光.png";
    this.img4.src = "../images/product1/ao.png";
  }

  //開始客製化
  drawIMG(custom = false) {

    this.imgCanvas.width = this.i.width * 1.2;
    this.imgCanvas.height = this.i.height * 1.2;

    this.ctx.drawImage(this.i, 0, 0, this.i.width * 1.2, this.i.height * 1.2);
    console.log(this.i);

    //if (custom) {
    //  this.ctx.globalCompositeOperation = "source-atop";
    //  this.ctx.drawImage(this.img2, 0, 0, this.img2.width, this.img.height - this.img.height / 2, 0, this.img.height - 200, this.img2.width, this.img.height - this.img.height / 2);
    //}

    //this.ctx.globalCompositeOperation = "lighter";
    //this.ctx.globalAlpha = .15;
    //this.ctx.drawImage(this.img3, 0, 0, this.img.width * 1.2, this.img.height * 1.2);

    //this.ctx.globalCompositeOperation = "multiply";
    //this.ctx.globalAlpha = .2;
    //this.ctx.drawImage(this.img4, 0, 0, this.img.width * 1.2, this.img.height * 1.2);

    //this.ctx.drawImage(this.img2, 0, 0, this.img2.width, this.img.height - this.img.height / 2, 0, this.img.height - 200, this.img2.width, this.img.height - this.img.height / 2);
  }
}

export default CustomDrawing;