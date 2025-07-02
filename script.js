const toggleButton = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const hamburgerIcon = document.querySelector(".hamburger-btn");
const nav = document.querySelector("header nav");
const overlay = document.querySelector(".overlay");

toggleButton.addEventListener("click", () => {
  overlay.classList.toggle("active");
  const navOpen = nav.classList.toggle("open");

  if (navOpen) {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    hamburgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  hamburgerIcon.style.display = "inline";
  closeIcon.style.display = "none";

  nav.classList.remove("open");
});
