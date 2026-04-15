<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TechStore - Chi tiết sản phẩm</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-50 text-gray-800">
    <header class="bg-white border-b border-gray-200">
      <div
        class="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4"
      >
        <div class="text-2xl font-bold text-blue-800">TechStore</div>
        <div class="flex-1 max-w-xl mx-8 relative">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            class="w-full bg-gray-100 border border-gray-300 rounded-full py-2 px-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div class="flex items-center space-x-6 text-gray-600">
          <a href="#" class="hover:text-blue-600">Đăng nhập</a>
          <a href="#" class="hover:text-blue-600">Yêu thích</a>
          <a href="#" class="hover:text-blue-600">Giỏ hàng</a>
        </div>
      </div>
      <nav
        class="max-w-[1200px] mx-auto flex space-x-8 py-3 px-4 text-sm font-medium"
      >
        <a href="#" class="hover:text-blue-600">Tất cả danh mục</a>
        <a href="#" class="text-blue-600 border-b-2 border-blue-600 pb-1"
          >Trang chủ</a
        >
        <a href="#" class="hover:text-blue-600">Sản phẩm</a>
        <a href="#" class="hover:text-blue-600">Liên hệ</a>
      </nav>
    </header>

    <main class="max-w-[1200px] mx-auto px-4 py-6">
      <div class="text-sm text-gray-500 mb-6">
        Trang chủ > Danh mục sản phẩm > Điện thoại >
        <span class="text-gray-800 font-medium">Chi tiết sản phẩm</span>
      </div>

      <div
        class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm flex gap-10 mb-8"
      >
        <div class="w-[45%]">
          <div
            class="w-full h-[400px] bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500 text-xl"
          >
            [Ảnh chính]
          </div>
          <div class="flex gap-4">
            <div
              class="w-24 h-24 bg-gray-200 rounded-md border-2 border-blue-500 flex items-center justify-center text-xs text-gray-500"
            >
              [Thumb 1]
            </div>
            <div
              class="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500"
            >
              [Thumb 2]
            </div>
            <div
              class="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500"
            >
              [Thumb 3]
            </div>
          </div>
        </div>

        <div class="w-[55%]">
          <h1 class="text-3xl font-bold mb-4">Tên Sản Phẩm Chi Tiết Mẫu</h1>
          <div class="text-2xl font-bold text-red-600 mb-6">25.000.000 ₫</div>

          <div class="mb-6">
            <p class="text-gray-600 mb-2">• Tùy chọn màu sắc:</p>
            <div class="flex gap-3">
              <button
                class="px-4 py-2 border border-blue-500 text-blue-600 rounded bg-blue-50"
              >
                Đen
              </button>
              <button
                class="px-4 py-2 border border-gray-300 rounded hover:border-blue-500"
              >
                Trắng
              </button>
            </div>
          </div>

          <div class="mb-6">
            <p class="text-gray-600 mb-2">• Thông số kỹ thuật cơ bản:</p>
            <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Màn hình: 6.7 inch, Super AMOLED</li>
              <li>Vi xử lý: Snapdragon 8 Gen 2</li>
              <li>RAM: 12 GB | ROM: 256 GB</li>
              <li>Pin: 5000 mAh, Sạc nhanh 45W</li>
            </ul>
          </div>

          <div class="flex gap-4 mt-8">
            <div class="flex items-center border border-gray-300 rounded">
              <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200">-</button>
              <input
                type="text"
                value="1"
                class="w-12 text-center border-none focus:outline-none"
                readonly
              />
              <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200">+</button>
            </div>
            <button
              class="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              MUA NGAY
            </button>
          </div>
        </div>
      </div>

      <div
        class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm mb-8"
      >
        <h2 class="text-xl font-bold border-b pb-4 mb-4">Mô tả sản phẩm</h2>
        <div class="text-gray-700 space-y-4">
          <p>
            Đây là khu vực hiển thị nội dung bài viết chi tiết về sản phẩm. Các
            đoạn văn sẽ được phân bố ở đây để giới thiệu các tính năng, thiết
            kế, hiệu năng và camera của thiết bị.
          </p>
          <div
            class="w-full h-[300px] bg-gray-200 rounded flex items-center justify-center text-gray-500"
          >
            [Hình ảnh minh họa mô tả]
          </div>
          <p>
            Chi tiết về công nghệ tản nhiệt mới, khả năng chơi game và thời
            lượng pin thực tế...
          </p>
        </div>
      </div>

      <div
        class="bg-white p-6 border border-gray-200 rounded-lg shadow-sm mb-8"
      >
        <h2 class="text-xl font-bold border-b pb-4 mb-4">
          Feedback / Đánh giá
        </h2>
        <div class="flex gap-6 mb-6">
          <div
            class="w-1/3 flex flex-col items-center justify-center border-r border-gray-200"
          >
            <span class="text-4xl font-bold text-yellow-500">4.8</span>
            <span class="text-sm text-gray-500">trên 5 sao</span>
            <div class="text-yellow-500 mt-2">★★★★★</div>
          </div>
          <div class="w-2/3 space-y-2">
            <div class="flex items-center text-sm">
              <span class="w-10">5 sao</span>
              <div class="flex-1 h-3 bg-gray-200 rounded mx-2">
                <div class="h-3 bg-yellow-500 rounded" style="width: 80%"></div>
              </div>
              <span>80%</span>
            </div>
            <div class="flex items-center text-sm">
              <span class="w-10">4 sao</span>
              <div class="flex-1 h-3 bg-gray-200 rounded mx-2">
                <div class="h-3 bg-yellow-500 rounded" style="width: 15%"></div>
              </div>
              <span>15%</span>
            </div>
            <div class="flex items-center text-sm">
              <span class="w-10">3 sao</span>
              <div class="flex-1 h-3 bg-gray-200 rounded mx-2">
                <div class="h-3 bg-yellow-500 rounded" style="width: 5%"></div>
              </div>
              <span>5%</span>
            </div>
          </div>
        </div>
        <div class="space-y-4 border-t pt-4">
          <div class="flex gap-4">
            <div class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <div class="font-semibold text-sm">
                Người dùng A
                <span class="text-yellow-500 text-xs ml-2">★★★★★</span>
              </div>
              <p class="text-sm text-gray-600 mt-1">
                Sản phẩm rất tốt, đóng gói cẩn thận. Giao hàng nhanh chóng.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-xl font-bold mb-4">Các sản phẩm liên quan</h2>
      <div class="grid grid-cols-3 gap-8">
        <script>
          for (let i = 0; i < 3; i++) {
            document.write(`
                    <div class="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <div class="w-full h-[200px] bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-400">[Ảnh]</div>
                        <h3 class="font-semibold text-md text-gray-800 mb-1">Sản phẩm tương tự ${i + 1}</h3>
                        <div class="text-red-600 font-bold text-md">20.000.000 ₫</div>
                    </div>
                    `);
          }
        </script>
      </div>
    </main>

    <footer class="bg-white border-t border-gray-200 mt-12 py-12">
      <div class="max-w-[1200px] mx-auto px-4 grid grid-cols-4 gap-8">
        <div>
          <h4 class="font-bold text-blue-800 mb-4 text-xl">TechStore</h4>
          <p class="text-sm text-gray-500">
            Hệ thống bán lẻ thiết bị điện tử chính hãng hàng đầu.
          </p>
        </div>
        <div>
          <h4 class="font-bold mb-4">Thông tin</h4>
          <ul class="text-sm text-gray-500 space-y-2">
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Tuyển dụng</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Hỗ trợ khách hàng</h4>
          <ul class="text-sm text-gray-500 space-y-2">
            <li><a href="#">Hướng dẫn mua hàng</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Chính sách bảo hành</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Liên hệ</h4>
          <ul class="text-sm text-gray-500 space-y-2">
            <li>Hotline: 1900 xxxx</li>
            <li>Email: cskh@techstore.vn</li>
            <li>Hà Nội, Việt Nam</li>
          </ul>
        </div>
      </div>
    </footer>
  </body>
</html>
