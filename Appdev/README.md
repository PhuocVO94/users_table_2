# 📊 Dự án Bảng Người Dùng (Users Table) – Angular + Angular Material

Đây là một ứng dụng Angular hiển thị danh sách người dùng bằng bảng (table) có phân trang, sắp xếp và tìm kiếm, được xây dựng bằng **Angular Framework** kết hợp với **Angular Material**.

## 🚀 Tính Năng Chính

### 1. 📄 Bảng phân trang (Pagination)

- Hiển thị danh sách người dùng dưới dạng **bảng nhiều trang**.
- Mặc định hiển thị **10 dòng mỗi trang**.
- Người dùng có thể **thay đổi số dòng hiển thị**

### 2. 📄 Định Dạng Số Dư (Balance)

- Trường balance được hiển thị với:
- Dấu $ đứng trước số dư.
- Dấu phân cách hàng nghìn (ví dụ: $1,234.56).

### 3. Liên Kết Email

- Địa chỉ email được hiển thị dưới dạng liên kết, sử dụng mailto để điều hướng.

### 4. Ngày Đăng Ký (Register At):

- Hiển thị ngày đăng ký theo định dạng yyyy-MM-dd.
- Khi di chuột vào ngày, title sẽ hiển thị đầy đủ thời gian bao gồm giờ, phút và giây.

### 5. Dữ Liệu Mẫu

#### Dự án tạo ra người dùng mẫu bằng cách sử dụng một trình tạo dữ liệu giả lập với các trường sau:

- đefault(100).
- Hàm generateRandomUsers được sử dụng để tạo danh sách người dùng mẫu với số lượng tùy chỉnh. Khi gọi hàm này và truyền vào một số nguyên dương, nó sẽ tạo ra số lượng người dùng tương ứng.

- generateRandomUsers = (count: number): TUser[] => {
  const users: TUser[] = [];
  for (let i = 0; i < count; i++) {
  const id = `user${i + 1}`;
  const name = `User ${i + 1}`;
  const balance = parseFloat((Math.random() _ 10000).toFixed(2));
  const email = `user${i + 1}@example.com`;
  const registerAt = new Date(
  Date.now() - Math.floor(Math.random() _ 365) _ 24 _ 60 _ 60 _ 1000
  );
  const active = true;

      users.push({
        id,
        name,
        balance,
        email,
        registerAt,
        active,
      });

  }
  return users;
  };

## 🛠 Công Nghệ Sử Dụng

- [Angular CLI](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- `BrowserModule,`
- `AppRoutingModule,`
- `MatSlideToggleModule,`
- `MatFormFieldModule,`
- `MatButtonModule,`
- `MatIconModule,`
- `MatTableModule,`
- `MatInputModule,`
- `MatSortModule,`
- `MatPaginatorModule,`
- `MatSortModule,`
- `MatTableModule,`
- TypeScript
- CSS

# Chạy ứng dụng:

git clone https://github.com/PhuocVO94/users_table_2.git
npm install
ng serve
