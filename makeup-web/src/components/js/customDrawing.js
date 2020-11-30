export class MyImgs {
	pId = [
		{
			item1: "1_空瓶.png",
			style1: "1_blue.png",
			style2: "1_brown.png",
			style3: "1_white.png",
		},
		{
			item1: "2_空瓶.png",
			style1: "2_bluegreen.png",
			style2: "2_khaki.png",
			style3: "2_white.png",
		},
		{
			item1: "3_空瓶.png",
			style1: "3_blue.png",
			style2: "3_brown.png",
			style3: "3_khaki.png",
		},
		{
			item1: "4_空瓶.png",
			style1: "4_bluegreen.png",
			style2: "4_pink.png",
			style3: "4_sand.png",
		},
	];
}
class CustomDrawing {
	constructor(images, num) {
		this.s = 3; //縮小倍率

		this.imgCanvas = document.getElementById("previewIMG"); //預覽圖畫布(客製顯示用)

		this.ctx = this.imgCanvas.getContext("2d");

		this.img = new MyImgs();
		this.img1 = new Image();
		this.img2 = new Image();
		this.img3 = new Image();
		this.styleImg = new Image();

		this.init(images, num);
		//console.log(this.img);
	}

	//客製化初始化
	init(images, num, style = "style1") {
		this.img1.src = images[this.img.pId[num].item1];
		this.styleImg.src = images[this.img.pId[num][style]];
		//this.img3.src = images["高光.png"];
		//this.img4.src = images["ao.png"];

		this.img1.onload = () => {
			this.drawIMG(num);
		};
	}

	//開始客製化
	drawIMG(num) {
		this.imgCanvas.width = this.img1.width / this.s;
		this.imgCanvas.height = this.img1.height / this.s;

		this.ctx.drawImage(this.img1, 0, 0, this.img1.width / this.s, this.img1.height / this.s);

		this.ctx.globalCompositeOperation = "source-atop";
		this.ctx.drawImage(
			this.styleImg,
			-this.imgCanvas.width / 2,
			0,
			this.styleImg.width / this.s,
			this.styleImg.height / this.s
		);

		//this.ctx.globalCompositeOperation = "lighter";
		//this.ctx.globalAlpha = 0.15;
		//this.ctx.drawImage(this.img3, 0, 0, this.img1.width / 5, this.img1.height / 5);

		//this.ctx.globalCompositeOperation = "multiply";
		//this.ctx.globalAlpha = 0.2;
		//this.ctx.drawImage(this.img4, 0, 0, this.img1.width / 5, this.img1.height / 5);

		//this.ctx.drawImage(
		//	this.img2,
		//	0,
		//	0,
		//	this.img2.width,
		//	this.img1.height - this.img1.height / 2,
		//	0,
		//	this.img1.height - 200,
		//	this.img2.width,
		//	this.img1.height - this.img1.height / 2
		//);
	}
}

export default CustomDrawing;
