var popupSection = document.getElementById("popup");
var imgList = document.querySelectorAll(".img-box img");
var closeBtn = document.getElementById("closeBtn");
var rightBtn = document.getElementById("rightBtn");
var leftBtn = document.getElementById("leftBtn");
var popupImg = document.getElementById("popupImg");
var currentIndex;

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    popupSection.classList.add("show");
    popupImg.src = e.target.src;

    for (var g = 0; g < imgList.length; g++) {
      if (imgList[g] == e.target) {
        currentIndex = g;
        console.log(g);
        break;
      }
    }
  });
}

closeBtn.addEventListener("click", function () {
  popupSection.classList.remove("show");
});

rightBtn.addEventListener("click", function () {
  nextImg();
});

leftBtn.addEventListener("click", function () {
  prevImg();
});

document.addEventListener("keydown", function (e) {
  if (e.code == "ArrowRight") {
    nextImg();
  } else if (e.code == "ArrowLeft") {
    prevImg();
  } else if (e.code == "Escape") {
    popupSection.classList.remove("show");
  }
});

function nextImg() {
  currentIndex++;
  if (currentIndex >= imgList.length) {
    currentIndex = 0;
  }
  popupImg.src = imgList[currentIndex].src;
}

function prevImg() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgList.length - 1;
  }
  popupImg.src = imgList[currentIndex].src;
}
