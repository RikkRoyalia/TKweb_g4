document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("reg-username").value.trim();
    const pass = document.getElementById("reg-password").value;
    const repass = document.getElementById("reg-repassword").value;
    const msgEl = document.getElementById("reg-msg");

    // Kiểm tra mật khẩu khớp nhau
    if (pass !== repass) {
      msgEl.innerText = "Mật khẩu nhập lại không khớp!";
      msgEl.className = "msg error";
      return;
    }

    // Lấy danh sách tài khoản cũ (nếu có), nếu không có thì tạo mảng rỗng []
    let usersDB = JSON.parse(localStorage.getItem("USERS_DB")) || [];

    // Kiểm tra xem tên đăng nhập đã tồn tại chưa
    const isExist = usersDB.find((u) => u.username === user);
    if (isExist) {
      msgEl.innerText = "Tên đăng nhập đã tồn tại!";
      msgEl.className = "msg error";
      return;
    }

    // Nếu hợp lệ: Thêm user mới vào mảng và lưu lại
    usersDB.push({ username: user, password: pass });
    localStorage.setItem("USERS_DB", JSON.stringify(usersDB));

    msgEl.innerText = "Đăng ký thành công! Đang chuyển hướng...";
    msgEl.className = "msg success";

    // Sau 1.5 giây thì tự động chuyển sang trang đăng nhập
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
