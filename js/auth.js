// Danh sách trang yêu cầu đăng nhập
const PROTECTED_PAGES = ["cart1.html"];

const activeUser = localStorage.getItem("ACTIVE_USER");
const currentPath = window.location.pathname;
const currentPage = currentPath.split("/").pop();

const isAuthPage =
  currentPage === "login.html" || currentPage === "register.html";
const isProtectedPage = PROTECTED_PAGES.includes(currentPage);

// Chỉ chặn nếu đang ở trang cần đăng nhập mà chưa đăng nhập
if (!activeUser && isProtectedPage) {
  // Lưu lại trang định đến để sau khi đăng nhập redirect về
  localStorage.setItem("REDIRECT_AFTER_LOGIN", currentPage);
  window.location.href = "login.html";
}

// Nếu đã đăng nhập mà vào trang login/register thì về trang chủ
if (activeUser && isAuthPage) {
  window.location.href = "index.html";
}

// Hàm đăng xuất
window.xuLyDangXuat = function () {
  localStorage.removeItem("ACTIVE_USER");
  window.location.href = "index.html";
};

// Tự động vẽ giao diện header
document.addEventListener("DOMContentLoaded", () => {
  const authArea = document.getElementById("auth-area");
  if (!authArea) return;

  if (activeUser) {
    // Đã đăng nhập: hiện tên + nút đăng xuất
    authArea.innerHTML = `
            <div class="flex flex-col items-center justify-start">
                <div class="flex flex-col items-center text-[13px] text-[#1f2937] hover:text-[#2563eb] cursor-pointer">
                    <span class="text-[22px] mb-[4px]">👤</span>
                    <span class="font-medium whitespace-nowrap">${activeUser}</span>
                </div>
                <button onclick="window.xuLyDangXuat()" 
                        class="mt-[6px] px-[14px] py-[4px] bg-[#fee2e2] text-[#ef4444] rounded-full text-[11px] font-bold hover:bg-[#ef4444] hover:text-white transition-all shadow-sm whitespace-nowrap">
                    Đăng xuất
                </button>
            </div>
        `;
  } else {
    // Chưa đăng nhập: hiện nút đăng nhập
    authArea.innerHTML = `
            <a href="login.html"
               class="flex flex-col items-center text-[13px] text-[#1f2937] hover:text-[#2563eb] transition-colors">
                <span class="text-[22px] mb-[4px]">👤</span>
                <span class="font-medium whitespace-nowrap">Đăng nhập</span>
            </a>
        `;
  }
});
