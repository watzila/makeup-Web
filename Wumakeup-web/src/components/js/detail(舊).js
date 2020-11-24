const starStyle = document.querySelectorAll(".writeCommend .star li");//寫評論全部星星樣式
const starCheckBox = document.querySelectorAll("input[name='starBTN']");//寫評論全部星星樣式checkBox
const countText = document.querySelector(".chooseCount span");//數量元素
const add = document.getElementById("add");//加
const reduce = document.getElementById("reduce");//減
const addCartBTN = document.getElementById("addCartBTN");//加入購物車按鈕
const otherPreviews = document.getElementById("otherPreviews");//其他預覽圖
const previewIMG = document.querySelector(".mainPreview img");//預覽圖
const love = document.getElementById("love");//愛心
const imgCanvas = document.getElementById("previewIMG");//預覽圖畫布(客製顯示用)

var canChange = true;//是否可以改變數量
var buyStatus = "addCart";//購買狀態
var ctx = imgCanvas.getContext("2d");
let img = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();

//寫評論星星樣式點擊事件
for (let i = 0; i < starStyle.length; i++) {
  starStyle[i].onclick = function () {
    starClick(i);
  }
};

//寫評論星星樣式被點擊
function starClick(i) {
  for (let j = 0; j < starStyle.length; j++) {
    starCheckBox[j].checked = (j > i) ? false : true;
    starStyle[j].innerText = (j > i) ? "☆" : "★";
  }
}

//數量加減
function changeCount(val) {
  if (countText.innerText == "1" && val == -1) {
    return;
  }
  countText.setAttribute("style", "--upDown:" + val);
  countText.className = "count";

  setTimeout(function () {
    countText.innerHTML = countText.innerText * 1 + val;
  }, 250);

  setTimeout(function () {
    countText.className = null;
    canChange = true;
  }, 500);
}

add.onclick = function () {
  if (canChange) {
    changeCount(1);
    canChange = false;
  }
}

reduce.onclick = function () {
  if (canChange) {
    changeCount(-1);
    canChange = false;
  }
}

//加入購物車先跳轉客製化
function addCart() {
  var changeIMG = otherPreviews.querySelector("ul");

  switch (buyStatus) {
    case "addCart":
      buyStatus = "ok";
      //previewIMG.style.display = "none";
      let otherIMG = otherPreviews.querySelectorAll("#otherPreviews li img");
      setTimeout(function () {
        for (let i = 0; i < otherIMG.length; i++) {
          otherIMG[i].src = "img/product1/bg1.png";
        }
        img2.src = otherIMG[0].src;
        img2.onload = function () {
          drawIMG(true);
        }
      }, 700);
      addCartBTN.innerText = "客製外觀確認";
      break;

    case "ok":
      buyStatus = "addCart";
      addCartBTN.innerText = "加入成功";
      break;
  }

  changeIMG.classList.toggle("changeIMG");
}

addCartBTN.onclick = addCart;

//按愛心
function clickLove() {
  love.classList.toggle("loveClick");
  love.innerHTML = (love.className == "love") ? "♡" : "♥";
}

love.onclick = clickLove;

//客製化初始化
function init() {
  let otherIMG = otherPreviews.querySelectorAll("#otherPreviews li img");

  for (let i = 0; i < otherIMG.length; i++) {
    otherIMG[i].src = "img/product1/產品1.png";
    otherIMG[i].style.objectFit = "contain";
  }
  img.src = otherIMG[0].src;
  img3.src = "img/product1/高光.png";
  img4.src = "img/product1/ao.png";
  window.onload = function () {
    drawIMG();
  };
}

init();

//開始客製化
function drawIMG(custom = false) {

  imgCanvas.width = img.width * 1.2;
  imgCanvas.height = img.height * 1.2;

  ctx.drawImage(img, 0, 0, img.width * 1.2, img.height * 1.2);

  if (custom) {
    ctx.globalCompositeOperation = "source-atop";
    ctx.drawImage(img2, 0, 0, img2.width, img.height - img.height / 2, 0, img.height - 200, img2.width, img.height - img.height / 2);
  }

  ctx.globalCompositeOperation = "lighter";
  ctx.globalAlpha = .15;
  ctx.drawImage(img3, 0, 0, img.width * 1.2, img.height * 1.2);

  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = .2;
  ctx.drawImage(img4, 0, 0, img.width * 1.2, img.height * 1.2);

  ctx.drawImage(img2, 0, 0, img2.width, img.height - img.height / 2, 0, img.height - 200, img2.width, img.height - img.height / 2);
}