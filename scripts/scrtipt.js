// modals
const btnModalFirst = document.getElementById("first-btn");
const btnModalSecond = document.getElementById("second-btn");
const btnModalThird = document.getElementById("third-btn");
const btnModalFourth = document.getElementById("fourth-btn");

const modalFirst = document.querySelector(".modal__first");
const modalSecond = document.querySelector(".modal__second");
const modalThird = document.querySelector(".modal__third");
const modalFourth = document.querySelector(".modal__fourth");

const modalCloseFirst = document.getElementById("close1");
const modalCloseSecond = document.getElementById("close2");
const modalCloseThird = document.getElementById("close3");
const modalCloseFourth = document.getElementById("close4");

// first modal
btnModalFirst.addEventListener("click", () => {
  modalFirst.style.display = "flex";
});
window.addEventListener("click", (event) => {
  if (event.target === modalFirst) {
    modalFirst.style.display = "none";
  }
});
modalCloseFirst.addEventListener("click", () => {
  modalFirst.style.display = "none";
});

// second modal
btnModalSecond.addEventListener("click", () => {
  modalSecond.style.display = "flex";
});

window.addEventListener("click", (event) => {
  if (event.target === modalSecond) {
    modalSecond.style.display = "none";
  }
});
modalCloseSecond.addEventListener("click", () => {
  modalSecond.style.display = "none";
});

// third modal
btnModalThird.addEventListener("click", () => {
  modalThird.style.display = "flex";
});

window.addEventListener("click", (event) => {
  if (event.target === modalThird) {
    modalThird.style.display = "none";
  }
});
modalCloseThird.addEventListener("click", () => {
  modalThird.style.display = "none";
});

// fourth modal
btnModalFourth.addEventListener("click", () => {
  modalFourth.style.display = "flex";
});
window.addEventListener("click", (event) => {
  if (event.target === modalFourth) {
    modalFourth.style.display = "none";
  }
});
modalCloseFourth.addEventListener("click", () => {
  modalFourth.style.display = "none";
});
