document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("login-username").value.trim();
  const pass = document.getElementById("login-password").value;
  const msgEl = document.getElementById("login-msg");
  // Lấy dữ liệu từ "Cơ sở dữ liệu ảo"
  let usersDB = JSON.parse(localStorage.getItem("USERS_DB")) || [];
  // Tìm xem có user nào khớp cả tên lẫn pass không
  const validUser = usersDB.find(
    (u) => u.username === user && u.password === pass,
  );

  if (validUser) {
    // Lưu phiên đăng nhập (lưu tên user đang online)
    localStorage.setItem("ACTIVE_USER", validUser.username);

    // Nếu có trang cần redirect về thì về đó, không thì về index
    const redirect =
      localStorage.getItem("REDIRECT_AFTER_LOGIN") || "index.html";
    localStorage.removeItem("REDIRECT_AFTER_LOGIN");
    window.location.href = redirect;
  } else {
    msgEl.innerText = "Sai tên đăng nhập hoặc mật khẩu!";
    msgEl.className = "msg error";
  }
});
