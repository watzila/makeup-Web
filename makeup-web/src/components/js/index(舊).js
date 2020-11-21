

// onsreen 圖片滑動
function debounce(func, wait = 60, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
// 每張圖片都要判斷
sliderImages.forEach(sliderImage => {
// 我們希望瀏覽器視窗移動到圖片一半的位置才觸發滑入
// 因此將瀏覽器視窗底部位置減掉圖片一半高度作為觸發點
const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight/2 ;
// 圖片底部位置
const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
// 當瀏覽器底部跑到圖片一半位置下方時
const isHalfShown = slideInAt > sliderImage.offsetTop;
// 瀏覽器底部還沒通過圖片底部時
const isNotScrolledPast = window.scrollY < imageBottom;
// 若瀏覽器底部超過圖片的一半
// 且未通過圖片底部
// 就讓圖片現身
// 反之隱藏
if (isHalfShown && isNotScrolledPast) {
  sliderImage.classList.add('active');
} else {
  sliderImage.classList.remove('active');
}
});
}

// 回呼函式得先用 debounce 處理過
window.addEventListener('scroll', debounce(checkSlide));
