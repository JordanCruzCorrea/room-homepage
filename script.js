const windowMediaQuery = window.matchMedia("(max-width: 375px)");

const wrapper = document.getElementById("wrapper");
const burgerBtn = document.getElementById("burger");
const burgerOpen = document.getElementById("burger-open");
const burgerClose = document.getElementById("burger-close");
const navEl = document.getElementById("nav");
const heroImg = document.getElementById("hero-img");
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");
const articleHeader = document.getElementById("article-header");
const articleP = document.getElementById("article-p");
const shopBtn = document.getElementById("shop-btn");
const shopArrow = document.getElementById("shop-arrow");

let isExpanded = false;
let isMobile = "mobile";

let info = [
  {
    id: 0,
    article: "Discover innovative ways to decorate",
    p:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 1,
    article: "We are available all across the globe",
    p:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 2,
    article: "Manufactured with the best materials",
    p:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let index = 0;

function mediaQuery() {
  if (windowMediaQuery.matches) {
    // todo: add transparent bg on mobile nav open
    isMobile = "mobile";
    navEl.style.display = "none";
    burgerClose.style.display = "none";

    changeContent(isMobile, index);
  } else {
    isMobile = "desktop";
    wrapper.style.display = "none";
    navEl.style.display = "flex";
    burgerOpen.style.display = "block";

    changeContent(isMobile, index);
  }
}

function toggleBurger() {
  isExpanded = !isExpanded;
  if (isExpanded == true) {
    navEl.style.display = "flex";
    wrapper.style.display = "block";
    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    burgerOpen.style.display = "none";
    burgerClose.style.display = "block";
  } else {
    navEl.style.display = "none";
    wrapper.style.display = "none";
    burgerClose.style.display = "none";
    burgerOpen.style.display = "block";
  }
}

function changeSlide(direction) {
  if (index >= 2) {
    index = 0;
    changeContent(isMobile, index);
  } else if (index == 0 && direction == "left") {
    index = 2;
    changeContent(isMobile, index);
  } else if (direction == "right") {
    index += 1;
    changeContent(isMobile, index);
  } else if (direction == "left") {
    index -= 1;
    changeContent(isMobile, index);
  }
}

function changeContent(size, index = 1) {
  heroImg.src = `./images/${size}-image-hero-${index}.jpg`;

  articleHeader.innerText = info[index].article;
  articleP.innerText = info[index].p;
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    changeSlide("left");
  }
  if (e.key == "ArrowRight") {
    changeSlide("right");
  }
});

windowMediaQuery.addEventListener("change", mediaQuery);

burgerBtn.addEventListener("click", toggleBurger);

shopBtn.addEventListener("mouseenter", () => {
  shopBtn.style.color = "hsl(0, 0%, 63%)";
  shopArrow.style.fill = "hsl(0, 0%, 63%)";
});

shopBtn.addEventListener("mouseleave", () => {
  shopBtn.style.color = "black";
  shopArrow.style.fill = "black";
});

mediaQuery();
