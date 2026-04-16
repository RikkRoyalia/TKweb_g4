document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((item) => item.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });
});
