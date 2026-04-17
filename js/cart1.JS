let cart = JSON.parse(localStorage.getItem('MY_CART')) || [];
let subtotal = 0;
let currentShippingFee = 30000;

function renderCheckout() {
    const listEl = document.getElementById('checkout-items');
    if(!listEl) return;
    listEl.innerHTML = '';
    subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        listEl.innerHTML += `
            <div class="checkout-item">
                <div class="item-info-mini">
                    <div class="item-name-mini">${item.name}</div>
                    <div class="item-qty-mini">Số lượng: ${item.quantity}</div>
                    <div class="item-price-mini">${item.price.toLocaleString('vi-VN')} đ</div>
                </div>
            </div>`;
    });
    updateTotals();
}

function selectRadio(element, type, fee = 0) {
    const parent = element.parentElement;
    parent.querySelectorAll('.radio-box').forEach(box => box.classList.remove('active'));
    element.classList.add('active');
    if(type === 'shipping') {
        currentShippingFee = fee;
        updateTotals();
    }
}

function updateTotals() {
    document.getElementById('checkout-subtotal').innerText = subtotal.toLocaleString('vi-VN') + ' đ';
    document.getElementById('checkout-shipping').innerText = currentShippingFee.toLocaleString('vi-VN') + ' đ';
    document.getElementById('checkout-final').innerText = (subtotal + currentShippingFee).toLocaleString('vi-VN') + ' đ';
}

function placeOrder() {
    const orderData = {
        orderId: Math.floor(Math.random() * 900000) + 100000,
        date: new Date().toLocaleDateString('vi-VN'),
        customer: {
            fullname: document.getElementById('fullname').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            ward: document.getElementById('ward').value
        },
        items: cart,
        subtotal: subtotal,
        shippingFee: currentShippingFee,
        total: subtotal + currentShippingFee,
        paymentMethod: document.querySelector('.radio-box.active .radio-title').innerText
    };
    localStorage.setItem('LATEST_ORDER', JSON.stringify(orderData));
    localStorage.removeItem('MY_CART');
    window.location.href = 'chitietdonhang.html';
}
renderCheckout();