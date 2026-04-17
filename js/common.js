function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('MY_CART')) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem('MY_CART', JSON.stringify(cart));
    alert("Đã thêm " + name + " vào giỏ hàng!");
}
      const allProducts = [
        {id: 1, name: 'Điện thoại Xiaomi Redmi Note 12', price: 4500000, category: 'dienthoai', img: 'redmi.webp' },
        { id: 2, name: 'Điện thoại iPhone 13 Pro', price: 18000000, category: 'dienthoai', img: 'Iphone13Pro.jpg' },
        { id: 3, name: 'Điện thoại Samsung Galaxy S23', price: 22000000, category: 'dienthoai', img: 'GalaxyS23.jpg' },

        { id: 4, name: 'Laptop Dell XPS 13', price: 25000000, category: 'laptop', img: 'Dell.jpg' },
        { id: 5, name: 'Laptop Asus Vivobook', price: 14000000, category: 'laptop', img: 'ASUS.jpg' },
        { id: 6, name: 'MacBook Air M2', price: 23500000, category: 'laptop', img: 'Mac.jpg' },

        { id: 7, name: 'iPad Gen 9 64GB', price: 7500000, category: 'tablet', img: 'Ipad.jpg' },
        { id: 8, name: 'Samsung Galaxy Tab S8', price: 15000000, category: 'tablet', img: 'SamSung.jpg' },
        { id: 9, name: 'Xiaomi Pad 6', price: 8500000, category: 'tablet', img: 'Xiaomi.jpg' },

        { id: 10, name: 'Apple Watch SE 2022', price: 6500000, category: 'smartwatch', img: 'Watch.jpg' },
        { id: 11, name: 'Samsung Galaxy Watch 6', price: 7000000, category: 'smartwatch', img: 'Watch6.jpg' },
        { id: 12, name: 'Đồng hồ Garmin Forerunner', price: 8500000, category: 'smartwatch', img: 'Garmin.jpg' },

        { id: 13, name: 'Tai nghe Bluetooth Sony', price: 1200000, category: 'phukien', img: 'Sony.jpg' },
        { id: 14, name: 'Sạc dự phòng Anker 10000mAh', price: 450000, category: 'phukien', img: 'Anker.jpg' },
        { id: 15, name: 'Chuột không dây Logitech G304', price: 800000, category: 'phukien', img: 'Logitech.jpg' }
      ];

      const productGrid = document.getElementById('product-grid');
      const paginationContainer = document.getElementById('pagination');
      let currentPage = 1;
      const itemsPerPage = 6;
      let currentFilteredList = [...allProducts];

      function renderProducts() {
        productGrid.innerHTML = ''; 
        if (currentFilteredList.length === 0) {
          productGrid.innerHTML = '<div class="col-span-3 text-center text-gray-500 py-10 font-medium">Không tìm thấy sản phẩm nào phù hợp!</div>';
          paginationContainer.innerHTML = ''; 
          return;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const productsToShow = currentFilteredList.slice(startIndex, startIndex + itemsPerPage);

        productsToShow.forEach(item => {
          productGrid.innerHTML += `
            <div class="bg-white p-[16px] border border-[#e5e7eb] rounded-[8px] flex flex-col">
              <div class="w-full h-[220px] bg-white rounded-[4px] mb-[16px] flex items-center justify-center p-[10px]">
                  <img src="${item.img}" alt="${item.name}" class="w-full h-full object-contain">
              </div>
              <h3 class="font-semibold text-[15px] text-[#1f2937] leading-[22px] mb-[4px] line-clamp-2">${item.name}</h3>
              <div class="mt-auto">
                  <div class="text-[#dc2626] font-bold text-[18px] mb-[16px]">${item.price.toLocaleString('vi-VN')} ₫</div>
                  <button onclick="addToCart('${item.name}', ${item.price}, '${item.img}')" 
                      class="w-full h-[36px] bg-white border border-[#2563eb] text-[#2563eb] text-[14px] font-medium rounded-[4px] hover:bg-[#2563eb] hover:text-white transition-colors">
                      Thêm giỏ hàng
                  </button>
              </div>
            </div>
          `;
        });
        renderPagination();
      }

      function renderPagination() {
        const totalPages = Math.ceil(currentFilteredList.length / itemsPerPage);
        paginationContainer.innerHTML = '';

        if (totalPages <= 1) return; 

        const prevBtn = document.createElement('button');
        prevBtn.className = "w-[36px] h-[36px] border border-[#d1d5db] rounded-[4px] flex items-center justify-center text-[#4b5563] hover:bg-[#f3f4f6] disabled:opacity-50 disabled:cursor-not-allowed";
        prevBtn.innerText = '<';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => { if(currentPage > 1) { currentPage--; renderProducts(); } };
        paginationContainer.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
          const pageBtn = document.createElement('button');
          if (i === currentPage) {
             pageBtn.className = "w-[36px] h-[36px] bg-[#2563eb] text-white rounded-[4px] flex items-center justify-center";
          } else {
             pageBtn.className = "w-[36px] h-[36px] border border-[#d1d5db] rounded-[4px] flex items-center justify-center text-[#4b5563] hover:bg-[#f3f4f6]";
          }
          pageBtn.innerText = i;
          pageBtn.onclick = () => { currentPage = i; renderProducts(); };
          paginationContainer.appendChild(pageBtn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.className = "w-[36px] h-[36px] border border-[#d1d5db] rounded-[4px] flex items-center justify-center text-[#4b5563] hover:bg-[#f3f4f6] disabled:opacity-50 disabled:cursor-not-allowed";
        nextBtn.innerText = '>';
        nextBtn.disabled = currentPage === totalPages; 
        nextBtn.onclick = () => { if(currentPage < totalPages) { currentPage++; renderProducts(); } };
        paginationContainer.appendChild(nextBtn);
      }

      function filterProducts() {
        const checkedCategories = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value);
        const selectedPrice = document.querySelector('.filter-radio:checked').value;

        currentFilteredList = allProducts.filter(product => {
          const matchCategory = checkedCategories.length === 0 || checkedCategories.includes(product.category);
          
          let matchPrice = true;
          if (selectedPrice === 'under5') matchPrice = product.price < 5000000;
          if (selectedPrice === '5to10') matchPrice = product.price >= 5000000 && product.price <= 10000000;
          if (selectedPrice === '10to20') matchPrice = product.price > 10000000 && product.price <= 20000000;
          if (selectedPrice === 'over20') matchPrice = product.price > 20000000;

          return matchCategory && matchPrice;
        });

        currentPage = 1;
        renderProducts();
      }

      document.querySelectorAll('.filter-checkbox, .filter-radio').forEach(input => {
        input.addEventListener('change', filterProducts);
      });

      filterProducts();
