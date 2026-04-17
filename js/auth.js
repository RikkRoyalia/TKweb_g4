const activeUser = localStorage.getItem("ACTIVE_USER");
const currentPath = window.location.pathname;

// 1. CHỐT CHẶN: Đuổi về login nếu chưa đăng nhập
const isAuthPage =
  currentPath.includes("login.html") || currentPath.includes("register.html");
if (!activeUser && !isAuthPage) {
  window.location.href = "login.html";
} else if (activeUser && isAuthPage) {
  window.location.href = "index.html";
}

// 2. HÀM ĐĂNG XUẤT
window.xuLyDangXuat = function () {
  localStorage.removeItem("ACTIVE_USER");
  window.location.href = "login.html";
};

// 3. TỰ ĐỘNG VẼ GIAO DIỆN MỚI
document.addEventListener("DOMContentLoaded", () => {
  if (activeUser) {
    const authArea = document.getElementById("auth-area");

    if (authArea) {
      authArea.innerHTML = `
                <div class="flex flex-col items-center justify-start">
                    <div class="flex flex-col items-center text-[13px] text-[#1f2937] hover:text-[#2563eb] cursor-pointer">
                        <span class="text-[22px] mb-[4px]">👤</span>
                        <span class="font-medium whitespace-nowrap">Tài khoản</span>
                    </div>
                    
                    <button onclick="window.xuLyDangXuat()" 
                            class="mt-[6px] px-[14px] py-[4px] bg-[#fee2e2] text-[#ef4444] rounded-full text-[11px] font-bold hover:bg-[#ef4444] hover:text-white transition-all shadow-sm whitespace-nowrap">
                        Đăng xuất
                    </button>
                </div>
            `;
    }
  }
});
