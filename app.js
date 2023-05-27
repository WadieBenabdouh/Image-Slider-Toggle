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

links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active");
    Array.from(link.parentNode.children).forEach((sibling) => {
      if (sibling !== link) {
        sibling.classList.remove("active");
      }
    });
  });
});
