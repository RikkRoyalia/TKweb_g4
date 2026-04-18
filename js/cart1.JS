let cart = JSON.parse(localStorage.getItem("MY_CART")) || [];
let subtotal = 0;
let currentShippingFee = 30000;

// ===== RENDER ĐƠN HÀNG =====
function renderCheckout() {
  const listEl = document.getElementById("checkout-items");
  if (!listEl) return;
  listEl.innerHTML = "";
  subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
    listEl.innerHTML += `
            <div class="checkout-item">
                <div class="item-info-mini">
                    <div class="item-name-mini">${item.name}</div>
                    <div class="item-qty-mini">Số lượng: ${item.quantity}</div>
                    <div class="item-price-mini">${item.price.toLocaleString("vi-VN")} đ</div>
                </div>
            </div>`;
  });
  updateTotals();
}

function selectRadio(element, type, fee = 0) {
  const parent = element.parentElement;
  parent
    .querySelectorAll(".radio-box")
    .forEach((box) => box.classList.remove("active"));
  element.classList.add("active");
  if (type === "shipping") {
    currentShippingFee = fee;
    updateTotals();
  }
}

function updateTotals() {
  document.getElementById("checkout-subtotal").innerText =
    subtotal.toLocaleString("vi-VN") + " đ";
  document.getElementById("checkout-shipping").innerText =
    currentShippingFee.toLocaleString("vi-VN") + " đ";
  document.getElementById("checkout-final").innerText =
    (subtotal + currentShippingFee).toLocaleString("vi-VN") + " đ";
}

// ===== VALIDATE =====
const rules = {
  fullname: {
    regex: /^[\p{L}\s]{2,50}$/u,
    msg: "Họ tên phải từ 2–50 ký tự, không chứa số hoặc ký tự đặc biệt",
  },
  phone: {
    regex: /^(0|\+84)[3-9]\d{8}$/,
    msg: "Số điện thoại không hợp lệ (VD: 0912345678)",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    msg: "Email không hợp lệ (VD: example@gmail.com)",
  },
  address: {
    regex: /^.{5,100}$/,
    msg: "Địa chỉ phải từ 5–100 ký tự",
  },
  city: {
    check: (val) => val !== "",
    msg: "Vui lòng chọn Tỉnh/Thành phố",
  },
  ward: {
    check: (val) => val !== "",
    msg: "Vui lòng chọn Phường/Xã",
  },
};

// Hiển thị lỗi dưới field
function showError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  field.classList.add("input-error");

  // Xóa thông báo lỗi cũ nếu có
  const existing = field.parentElement.querySelector(".error-msg");
  if (existing) existing.remove();

  const errEl = document.createElement("p");
  errEl.className = "error-msg";
  errEl.innerText = msg;
  field.parentElement.appendChild(errEl);
}

// Xóa lỗi khi người dùng sửa
function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  field.classList.remove("input-error");
  const existing = field.parentElement.querySelector(".error-msg");
  if (existing) existing.remove();
}

// Validate 1 field
function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const val = field.value.trim();
  const rule = rules[fieldId];

  if (!val) {
    showError(fieldId, "Trường này không được để trống");
    return false;
  }

  if (rule.regex && !rule.regex.test(val)) {
    showError(fieldId, rule.msg);
    return false;
  }

  if (rule.check && !rule.check(val)) {
    showError(fieldId, rule.msg);
    return false;
  }

  clearError(fieldId);
  return true;
}

// Validate toàn bộ form
function validateForm() {
  const fields = ["fullname", "phone", "email", "address", "city", "ward"];
  let isValid = true;
  fields.forEach((id) => {
    if (!validateField(id)) isValid = false;
  });
  return isValid;
}

// Gắn sự kiện realtime validate khi người dùng rời khỏi field
document.addEventListener("DOMContentLoaded", () => {
  const fields = ["fullname", "phone", "email", "address", "city", "ward"];
  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => validateField(id));
    el.addEventListener("input", () => {
      // Chỉ clear lỗi khi đang gõ, không validate lại ngay
      if (el.classList.contains("input-error")) clearError(id);
    });
  });
});

// ===== ĐẶT HÀNG =====
function placeOrder() {
  if (!validateForm()) {
    // Cuộn lên field đầu tiên bị lỗi
    const firstError = document.querySelector(".input-error");
    if (firstError)
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const orderData = {
    orderId: Math.floor(Math.random() * 900000) + 100000,
    date: new Date().toLocaleDateString("vi-VN"),
    customer: {
      fullname: document.getElementById("fullname").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
      address: document.getElementById("address").value.trim(),
      city: document.getElementById("city").value,
      ward: document.getElementById("ward").value,
    },
    items: cart,
    subtotal: subtotal,
    shippingFee: currentShippingFee,
    total: subtotal + currentShippingFee,
    paymentMethod: document.querySelector(".radio-box.active .radio-title")
      .innerText,
  };

  localStorage.setItem("LATEST_ORDER", JSON.stringify(orderData));
  localStorage.removeItem("MY_CART");
  window.location.href = "chitietdonhang.html";
}

renderCheckout();
