function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('MY_CART')) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem('MY_CART', JSON.stringify(cart));
    
    // THAY ĐỔI TẠI ĐÂY: 
    // Chỉ hiện thông báo để khách biết đã thêm thành công
    alert("Đã thêm " + name + " vào giỏ hàng!");

    // Xóa hoặc comment (vô hiệu hóa) dòng chuyển hướng này đi:
    // window.location.href = 'cart.html'; 
}