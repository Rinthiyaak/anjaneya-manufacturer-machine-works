
let lastScroll = 0;
const header = document.querySelector("header");
const navbar = document.querySelector("#nav-bar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 80) {
    // Scrolling down
    header.style.top = "-60px"; 
    navbar.style.top = "0"; 
  } else {
    // Scrolling up
    header.style.top = "0"; 
    navbar.style.top = "60px"; 
  }

  lastScroll = currentScroll;
});
