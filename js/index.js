// nav
document.querySelectorAll("nav a").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll("nav a")
      .forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

// bread-crumbs
document.querySelectorAll("nav a").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    // remove active cũ
    document
      .querySelectorAll("nav a")
      .forEach((i) => i.classList.remove("active"));
    // set active mới
    this.classList.add("active");
    // update breadcrumb
    const text = this.innerText.trim();
    let html = `<a href="#">Trang chủ</a>`;
    if (text !== "Trang chủ") {
      html += ` <span>></span> <span>${text}</span>`;
    }
    document.querySelector(".bread-crumbs").innerHTML = html;
  });
});
