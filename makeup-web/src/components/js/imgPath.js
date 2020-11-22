//引入全部圖片
class IMGPath {
  importAll(r) {
    let images = {};

    r.keys().map((item, index) => images[item.replace('./', '')] = r(item).default);
    return images;
    //console.log(r.keys());
    //console.log(r("./banner1.jpg"));
    //console.log(images);
  }
}

export default IMGPath;