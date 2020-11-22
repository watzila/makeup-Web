class CustomDrawing {
  constructor(images) {
    this.imgCanvas = document.getElementById("previewIMG");//預覽圖畫布(客製顯示用)

    this.ctx = this.imgCanvas.getContext("2d");
    this.img = new Image();
    this.img2 = new Image();
    this.img3 = new Image();
    this.img4 = new Image();


    this.init(images);
    //console.log(images);
  }

  //客製化初始化
  init(images) {
    this.img.src = images["1.png"];
    this.img3.src = images["高光.png"];
    this.img4.src = images["ao.png"];

    this.img4.onload = () => {
      this.drawIMG();
    };
  }

  //開始客製化
  drawIMG(custom = false) {

    this.imgCanvas.width = this.img.width * 1.5;
    this.imgCanvas.height = this.img.height * 1.5;

    this.ctx.drawImage(this.img, 0, 0, this.img.width * 1.5, this.img.height * 1.5);

    if (custom) {
      this.ctx.globalCompositeOperation = "source-atop";
      this.ctx.drawImage(this.img2, 0, 0, this.img2.width, this.img.height - this.img.height / 2, 0, this.img.height - 200, this.img2.width, this.img.height - this.img.height / 2);
    }

    this.ctx.globalCompositeOperation = "lighter";
    this.ctx.globalAlpha = .15;
    this.ctx.drawImage(this.img3, 0, 0, this.img.width * 1.5, this.img.height * 1.5);

    this.ctx.globalCompositeOperation = "multiply";
    this.ctx.globalAlpha = .2;
    this.ctx.drawImage(this.img4, 0, 0, this.img.width * 1.5, this.img.height * 1.5);

    this.ctx.drawImage(this.img2, 0, 0, this.img2.width, this.img.height - this.img.height / 2, 0, this.img.height - 200, this.img2.width, this.img.height - this.img.height / 2);
  }
}

export default CustomDrawing;