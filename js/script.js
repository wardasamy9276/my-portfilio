const spinnerLoader = document.querySelector(".spinner-container");

window.addEventListener("load", () => {
  spinnerLoader.style.display = "block";

  setTimeout(() => {
    spinnerLoader.style.display = "none";
  }, 2000);
});

// Start NavBar

let navLinks = document.querySelector("nav .links");
let allBars = document.querySelectorAll(".bars ul li");

let firstBar = document.querySelector(".bars ul li:nth-child(1)");
let secondBar = document.querySelector(".bars ul li:nth-child(2)");
let lastBar = document.querySelector(".bars ul li:nth-child(3)");

allBars.forEach((bar) => {
  bar.addEventListener("click", (e) => {
    e.stopPropagation();
    secondBar.classList.toggle("hide");
    firstBar.classList.toggle("change-1");
    lastBar.classList.toggle("change-2");
    navLinks.classList.toggle("active-list");
  });
});

// Remove Class Active List From Nav Links
const allLiLinks = document.querySelectorAll("nav .links li");

allLiLinks.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (navLinks.classList.contains("active-list")) {
      secondBar.classList.remove("hide");
      firstBar.classList.remove("change-1");
      lastBar.classList.remove("change-2");
      navLinks.classList.remove("active-list");
    }
  });
});

// Start Time Line

const timeLineLinks = document.querySelectorAll(".timeline-links li");

const timeLineContent = document.querySelectorAll(".time-line .box-time-line");

timeLineLinks.forEach((li) => {
  li.addEventListener("click", doAll);
});

function doAll() {
  timeLineLinks.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
  timeLineContent.forEach((con) => {
    con.style.display = "none";
  });
  document.querySelectorAll(this.dataset.timeline).forEach((co) => {
    co.style.display = "block";
  });
}

// Start Show TimeLine Content

const allTimeLineContent = document.querySelectorAll(".time-line .data-learn");

const optionTimeLine = {
  root: null,
  threshold: "0",
  rootMargin: "0px 0px -250px 0px",
};

const observerTimeLine = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
  });
}, optionTimeLine);
allTimeLineContent.forEach((timeLine) => {
  observerTimeLine.observe(timeLine);
});

// End Time Line

// Start Recent Work

let allViewImg = document.querySelectorAll(".project .view-img");

let contentShowImg = document.querySelector(".content-show-img");

allViewImg.forEach((eay) => {
  eay.addEventListener("click", showImg);
});

function showImg(e) {
  const projectItem = e.target.parentElement.parentElement;
  let projectImg = projectItem.querySelector("img");

  let img = document.createElement("img");

  let btnClose = document.createElement("div");

  btnClose.textContent = "X";

  btnClose.className = "close-show-img";

  img.src = projectImg.src;

  contentShowImg.classList.add("active");

  contentShowImg.append(img, btnClose);
  btnClose.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove("active");
    e.target.remove();
  });
}

// Start Appear Services

let allServices = document.querySelectorAll(".services .boxes .box");

const optionService = {
  root: null,
  threshold: "0",
  rootMargin: "0px 0px -300px 0px",
};

const observerServices = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add("appear")
      : entry.target.classList.remove("appear");
  });
}, optionService);
allServices.forEach((services) => {
  observerServices.observe(services);
});

// Start disable Inspect
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Don't be one of those who copy and paste");
});
