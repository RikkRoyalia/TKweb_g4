# TechStore - Website Bán Lẻ Thiết Bị Điện Tử

TechStore là một website thương mại điện tử bán lẻ thiết bị điện tử chính hãng, được xây dựng bằng HTML, CSS và JavaScript thuần, không sử dụng framework backend.

---

## Công nghệ sử dụng

- **HTML5** — Cấu trúc trang
- **CSS3** — Tạo kiểu giao diện (tách file CSS riêng cho từng trang)
- **Tailwind CSS** (CDN) — Hỗ trợ styling nhanh ở một số trang
- **JavaScript (Vanilla)** — Xử lý logic phía client
- **LocalStorage** — Lưu trữ dữ liệu giỏ hàng, tài khoản người dùng và đơn hàng
- **Font Awesome 6** — Bộ icon

---

## Cấu trúc thư mục

```
TechStore/
├── html/
│   ├── index.html            # Trang chủ
│   ├── danhmuc.html          # Danh mục sản phẩm + bộ lọc
│   ├── chitiet.html          # Chi tiết sản phẩm
│   ├── cart.html             # Giỏ hàng (Bước 1)
│   ├── cart1.html            # Thanh toán (Bước 2)
│   ├── Chitietdonhang.html   # Xác nhận đơn hàng (Bước 3)
│   ├── about_us.html         # Giới thiệu
│   ├── login.html            # Đăng nhập
│   └── register.html         # Đăng ký
│
├── css/
│   ├── index.css             # Style trang chủ
│   ├── cart.CSS              # Style giỏ hàng
│   ├── cart1.css             # Style trang thanh toán
│   ├── Chitietdonhang.css    # Style trang hoàn tất đơn hàng
│   └── auth.css              # Style trang đăng nhập / đăng ký
│
├── js/
│   ├── auth.js               # Kiểm tra phiên đăng nhập, bảo vệ trang
│   ├── common.js             # Hàm addToCart dùng chung
│   ├── index.js              # Logic trang chủ
│   ├── cart.js               # Logic giỏ hàng
│   ├── cart1.js              # Logic thanh toán + validate form
│   ├── chitietdonhang.js     # Hiển thị chi tiết đơn hàng
│   ├── login.js              # Xử lý đăng nhập
│   └── register.js           # Xử lý đăng ký
│
└── images/                   # Hình ảnh sản phẩm và banner
```

---

## Tính năng chính

### Người dùng
- Đăng ký / Đăng nhập tài khoản (lưu bằng LocalStorage)
- Tự động chuyển hướng sau khi đăng nhập
- Hiển thị tên người dùng và nút đăng xuất trên header khi đã đăng nhập

### Sản phẩm
- Hiển thị danh sách sản phẩm với lọc theo **danh mục** và **mức giá**
- Phân trang (6 sản phẩm/trang)
- Trang chi tiết sản phẩm với hình ảnh, thông số kỹ thuật và đánh giá

### Giỏ hàng
- Thêm sản phẩm vào giỏ từ nhiều trang
- Tăng/giảm số lượng, xóa sản phẩm
- Áp dụng mã giảm giá (`DISCOUNT10` — giảm 10%)
- Tính toán tạm tính, phí vận chuyển và tổng tiền

### Thanh toán
- Nhập thông tin khách hàng với **validate real-time** (họ tên, SĐT, email, địa chỉ)
- Chọn phương thức giao hàng (tiêu chuẩn / nhanh)
- Chọn phương thức thanh toán (COD / chuyển khoản / thẻ tín dụng)
- Trang yêu cầu **đăng nhập** trước khi truy cập

### Đơn hàng
- Lưu và hiển thị chi tiết đơn hàng sau khi đặt thành công
- Hiển thị mã đơn hàng, ngày đặt, danh sách sản phẩm, tổng tiền và thông tin người nhận

---

## Hướng dẫn chạy

Vì đây là website tĩnh (Static Web), bạn **không cần cài đặt server**. Chỉ cần mở file HTML trực tiếp trên trình duyệt.

**Cách 1 — Mở thẳng file:**
```
Mở file html/index.html bằng trình duyệt (Chrome, Firefox, Edge...)
```

**Cách 2 — Dùng Live Server (VS Code):**
1. Cài extension **Live Server** trong VS Code
2. Chuột phải vào `html/index.html` → chọn **Open with Live Server**

> **Lưu ý:** Vì dự án dùng đường dẫn tương đối (`../images/`, `../css/`...), tất cả các file phải giữ nguyên cấu trúc thư mục khi chạy.

---

## Luồng mua hàng

```
Trang chủ / Danh mục
        ↓
   Chi tiết sản phẩm
        ↓
      Giỏ hàng            ← Bước 1
        ↓
   Thanh toán (*)         ← Bước 2  (*) Yêu cầu đăng nhập
        ↓
  Xác nhận đơn hàng       ← Bước 3
```

---

## Dữ liệu LocalStorage

| Key | Nội dung |
|---|---|
| `USERS_DB` | Danh sách tài khoản đã đăng ký |
| `ACTIVE_USER` | Tên người dùng đang đăng nhập |
| `MY_CART` | Danh sách sản phẩm trong giỏ hàng |
| `LATEST_ORDER` | Thông tin đơn hàng vừa đặt |
| `REDIRECT_AFTER_LOGIN` | Trang cần chuyển đến sau khi đăng nhập |

> Dữ liệu được lưu trên trình duyệt của người dùng và sẽ mất nếu xóa dữ liệu trình duyệt.

---

## Mã giảm giá

| Mã | Ưu đãi |
|---|---|
| `DISCOUNT10` | Giảm 10% tổng đơn hàng |

---

## Liên hệ

- **Hotline:** 1900 xxxx  
- **Email:** cskh@techstore.vn  
- **Địa chỉ:** Hà Nội, Việt Nam
