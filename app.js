const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const img1 = document.querySelector(".img1");
const links = document.querySelectorAll("a");

btn1.addEventListener("click", () => {
  img1.style.marginLeft = "0";
});

btn2.addEventListener("click", () => {
  img1.style.marginLeft = "-20%";
});

btn3.addEventListener("click", () => {
  img1.style.marginLeft = "-40%";
});

btn4.addEventListener("click", () => {
  img1.style.marginLeft = "-60%";
});

btn5.addEventListener("click", () => {
  img1.style.marginLeft = "-80%";
});

function handleClick(event) {
  const clickedLink = event.target;

  links.forEach((link) => {
    if (link === clickedLink) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
