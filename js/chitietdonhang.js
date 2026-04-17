document.addEventListener("DOMContentLoaded", () => {
    // 1. Mở kho lấy dữ liệu ra
    const orderData = JSON.parse(localStorage.getItem('LATEST_ORDER'));

    if (!orderData) {
        alert("Dữ liệu đơn hàng không tồn tại!");
        window.location.href = 'cart.html';
        return;
    }

    const formatMoney = (num) => num.toLocaleString('vi-VN') + ' đ';

    // 2. Hiển thị Mã đơn, Ngày, Tổng tiền, PT Thanh toán
    const summaryUl = document.querySelector('.order-summary ul');
    summaryUl.innerHTML = `
        <li><strong>Số đơn hàng:</strong> #${orderData.orderId}</li>
        <li><strong>Ngày:</strong> ${orderData.date}</li>
        <li><strong>Tổng cộng:</strong> ${formatMoney(orderData.total)}</li>
        <li><strong>Phương thức thanh toán:</strong> ${orderData.paymentMethod}</li>
    `;

    // 3. Hiển thị danh sách sản phẩm đã mua vào bảng
    const table = document.querySelector('.order-table');
    let html = `<div class="table-header">
                    <div>Sản phẩm</div>
                    <div>Đơn giá</div>
                    <div>Số lượng</div>
                    <div>Thành tiền</div>
                </div>`;

    orderData.items.forEach(item => {
        html += `<div class="table-row">
                    <div>${item.name}</div>
                    <div>${formatMoney(item.price)}</div>
                    <div>${item.quantity}</div>
                    <div>${formatMoney(item.price * item.quantity)}</div>
                </div>`;
    });
    table.innerHTML = html;

    // 4. Hiển thị cộng tiền phía dưới
    const totalBox = document.querySelector('.order-total');
    totalBox.innerHTML = `
        <div><span>Giá sản phẩm:</span><strong>${formatMoney(orderData.subtotal)}</strong></div>
        <div><span>Phí vận chuyển:</span><strong>${formatMoney(orderData.shippingFee)}</strong></div>
        <div class="grand-total"><span>Tổng tiền:</span><strong>${formatMoney(orderData.total)}</strong></div>
    `;

    // 5. Hiển thị thông tin khách hàng vào ô "Địa chỉ nhận thanh toán"
    const addrCard = document.querySelector('.address-card .card-content');
    addrCard.innerHTML = `
        <p><strong>${orderData.customer.fullname}</strong></p>
        <p>${orderData.customer.phone}</p>
        <p>${orderData.customer.address}, ${orderData.customer.ward}, ${orderData.customer.city}</p>
    `;
});