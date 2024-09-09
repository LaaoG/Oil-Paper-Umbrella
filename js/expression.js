createCustomNavbar();

let backBtn = document.querySelector(".back-umbrella img");

backBtn.onclick = () => {
  window.location = "./directory.html";
};

window.onload = () => {
  document.body.appendChild(createCustomNavbar());
};

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

async function changeUmbrella(imgUrl) {
  const umbrella = document.querySelector(".umbrella");
  if (umbrella.src === imgUrl) return;
  umbrella.style.opacity = "0.2";
  // await new Promise((resolve) => setTimeout(resolve, 600));
  umbrella.src = imgUrl;
  umbrella.style.opacity = "1";
}

function hoverImage(img) {
  // 检查图片是否已被选中，如果未被选中，则切换图片并改变透明度
  if (!img.classList.contains("enlarged")) {
    img.src = img.getAttribute("data-src");
    // img.style.opacity = "0.5"; // 示例：半透明预览
  }
}

function resetImage(img) {
  // 如果图片未被选中，则重置透明度并切换回原始图片
  if (!img.classList.contains("enlarged")) {
    img.src = "../assets/img/expression/组 386.png"; // 假设这是原始图片的URL
    img.style.opacity = "1"; // 示例：完全可见
  }
}

function select(img) {
  img.classList.add("enlarged");
  img.src = img.getAttribute("data-src");

  // 重置其他图片的样式和src
  let images = document.querySelectorAll(".image-item");
  images.forEach((item) => {
    if (item !== img) {
      item.classList.remove("enlarged");
      item.src = "../assets/img/expression/组 386.png"; // 假设这是原始图片的URL
    }
  });
}

const processImg = document.querySelector(".l1");
const processImg2 = document.querySelector(".zi");
const processImg3 = document.querySelector(".TU");
const processImg4 = document.querySelector(".xw");

// 创建Intersection Observer对象
const observer = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        // 当元素进入视口时，添加visible类以启动动画
        entry.target.classList.add("visible");
        // 停止观察已经进入视口的元素
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0 }
); // 设置阈值为0，表示任何部分的元素可见时触发

// 观察图片元素
observer.observe(processImg);
observer.observe(processImg2);
observer.observe(processImg3);
observer.observe(processImg4);

//////
