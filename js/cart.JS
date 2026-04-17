let discountPercent = 0;

// Khởi tạo giỏ hàng: Lấy từ LocalStorage, nếu trống thì dùng mảng rỗng [] (Chờ dữ liệu từ trang khác bắn sang)
let cart = JSON.parse(localStorage.getItem('MY_CART')) || [];

function saveCart() {
    localStorage.setItem('MY_CART', JSON.stringify(cart));
}

// Hàm format tiền (ví dụ: 30990000 -> 30.990.000 đ)
const formatMoney = (amount) => amount.toLocaleString('vi-VN').replace(/,/g, '.') + ' đ';

// === HÀM VẼ GIAO DIỆN ===
function renderCart() {
    const emptyState = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    
    // Nếu giỏ hàng trống thì hiện thông báo rỗng
    if (cart.length === 0) {
        emptyState.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    } else {
        emptyState.style.display = 'none';
        cartContent.style.display = 'grid';
    }

    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.quantity; 

        // HTML cho từng sản phẩm theo thiết kế
        productList.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="item-img">
                <div class="item-details">
                    <div class="item-title">${item.name}</div>
                    <div class="item-bottom">
                        <div class="item-price">${formatMoney(item.price)}</div>
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                            <input type="text" class="qty-input" value="${item.quantity}" readonly>
                            <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                        </div>
                    </div>
                </div>
                <button class="remove-btn" title="Xóa sản phẩm" onclick="removeItem(${index})">🗑️</button>
            </div>
        `;
    });

    updateSummary(subtotal);
}

// === HÀM TÍNH TOÁN TỔNG KẾT ===
function updateSummary(subtotal) {
    const discountAmount = subtotal * discountPercent;
    const finalTotal = subtotal - discountAmount; 

    document.getElementById('subtotal').innerText = formatMoney(subtotal);
    document.getElementById('final-total').innerText = formatMoney(finalTotal);

    const discountRow = document.getElementById('discount-row');
    if (discountAmount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discount-amount').innerText = `-${formatMoney(discountAmount)}`;
    } else {
        discountRow.style.display = 'none';
    }
}

function updateQty(index, change) {
    const newQty = cart[index].quantity + change;
    if (newQty > 0) {
        cart[index].quantity = newQty;
        saveCart();  
        renderCart(); 
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart(); 
    renderCart();
}

function applyCoupon() {
    const input = document.getElementById('coupon-input').value.trim().toUpperCase();
    const msgEl = document.getElementById('coupon-msg');
    
    if (input === 'DISCOUNT10') {
        discountPercent = 0.1; 
        msgEl.innerText = "Áp dụng thành công mã giảm giá 10%!";
        msgEl.style.color = 'var(--success-color)';
        msgEl.style.display = 'block';
    } else if (input !== '') {
        discountPercent = 0;
        msgEl.innerText = "Mã giảm giá không hợp lệ.";
        msgEl.style.color = 'var(--danger-color)';
        msgEl.style.display = 'block';
    }
    renderCart(); 
}

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống, hãy chọn sản phẩm đã!");
        return;
    }
    // LƯU Ý: Phải lưu giỏ hàng hiện tại vào kho trước khi chuyển trang
    saveCart(); 
    window.location.href = 'cart1.html';
}

// Chạy lần đầu
renderCart();