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
    window.location.href = "index.html";
  } else {
    msgEl.innerText = "Sai tên đăng nhập hoặc mật khẩu!";
    msgEl.className = "msg error";
  }
});
