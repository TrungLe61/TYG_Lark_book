# TYG · Sổ tay Lark

Website hướng dẫn tiếng Việt bằng ảnh thật, dành cho nhân sự ít quen công nghệ.

Địa chỉ công khai: https://trungle61.github.io/TYG_Lark_book/

## Bản đầu

Bài 01 **Thiết lập Base nhân viên cho công ty** có 32 bước từ tạo Base đến chọn tài khoản nhân viên và các người phụ trách trên cùng dòng. Cấu trúc có 10 cột; Ban kiểm soát và Chủ tịch bắt buộc theo yêu cầu TYG. Ban kiểm soát dùng Person, bật cho phép nhiều thành viên. Họ Tên dùng Text; các cột tài khoản phải dùng Person và bấm chọn đúng kết quả tìm kiếm.

Bài 02 **Kết nối Base nhân viên với Approval** có 16 bước. Bài mô tả cấu hình mẫu đã khảo sát ngày 01/10/2026: một bước duyệt theo Person, tất cả người được giao cần đồng ý, Auto-approve khi thiếu người duyệt và người gửi vẫn duyệt khi trùng người. Mẫu kết nối tham chiếu sáu trường; chưa dùng Ban kiểm soát hoặc Chủ tịch làm cấp duyệt.

Cả hai bài có ảnh thật, khung đỏ, hướng dẫn bên cạnh, lỗi thường gặp và nguồn chính thức Lark. Base thực hành riêng chỉ lưu thông tin chữ giả; các ô tài khoản để trống. Ảnh bộ chọn tài khoản và ảnh đối chiếu Base mẫu đã che danh tính trước khi đưa vào repository. Phần tạo Approval từ đầu và Attendance chưa được xuất bản. Luồng nhiều cấp cần chủ quy trình xác nhận thứ tự và điều kiện trước khi viết.

Khảo sát mẫu không lưu thay đổi biểu mẫu, không Publish và không gửi yêu cầu duyệt thử. Vì vậy chưa xác nhận kết quả chạy thực tế. Không biến cấu hình mẫu thành chính sách mặc định cho các công ty.

## Chạy cục bộ

Yêu cầu Node.js 22.12+ (khuyên dùng Node.js 24).

```sh
npm ci
ASTRO_TELEMETRY_DISABLED=1 npm run dev
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run verify
```

Mở đường dẫn `/TYG_Lark_book/` trên địa chỉ máy chủ được in ra.

## Cập nhật bài

- Nội dung nằm trong `src/content/guides/*.md`. Phần đầu YAML chứa tiêu đề, thứ tự, ngày kiểm tra, các bước, FAQ và lịch sử cập nhật. Phần sau là đoạn giới thiệu Markdown.
- Ảnh từng bài nằm ở `public/images/<tên-bài>/`. Trường `image` là đường dẫn tính từ thư mục `public/images/`; `imageWidth` và `imageHeight` là kích thước ảnh thực tế để giữ vị trí mục lục ổn định khi ảnh tải.
- Mỗi bước chỉ có một thao tác chính; tên nút tiếng Anh kèm nghĩa tiếng Việt. Ghi giá trị phải chọn/nhập và kết quả phải thấy.
- Chụp đúng giao diện đang dùng. Không tạo lại giao diện Lark bằng AI. Che dữ liệu bằng vùng màu đục trước khi lưu ảnh vào repository; không chỉ phủ CSS, không dùng ảnh gốc trong lịch sử Git.
- Ảnh gốc, thông tin đăng nhập, đường dẫn Base nội bộ và dữ liệu nhân viên không được commit. Giữ chúng ngoài repository hoặc trong thư mục `private/` đã bỏ qua Git.
- Cập nhật `verified` khi kiểm tra giao diện thật; cập nhật `updated` và thêm một dòng `changes` khi sửa bài.
- Chạy build và verify; kiểm tra ảnh, tìm kiếm, phóng to và giao diện điện thoại trước khi push.

## Triển khai

Trong Settings → Pages của repository, chọn Source **GitHub Actions**. Workflow `.github/workflows/deploy.yml` xây website, kiểm tra các đường dẫn và tải bản dựng lên GitHub Pages khi push nhánh `main`. Pull request chỉ xây và kiểm tra, không triển khai.

Website tĩnh, không backend, không lưu dữ liệu nhân viên, không kết nối trực tiếp Lark. Font được đóng gói trong website. Tìm kiếm chạy tại trình duyệt; đánh dấu bước đã làm chỉ được lưu trên thiết bị của người đọc.

## Kiểm tra trước khi phát hành

1. `npm run build` và `npm run verify` thành công.
2. Tìm không dấu “ban kiem soat” thấy bài thiết lập Base; “nguoi duyet” thấy bài kết nối; từ không có kết quả cho thông báo rõ ràng.
3. Ảnh mở bằng chuột và bàn phím; Esc/Đóng ảnh quay lại đúng bước.
4. Mục lục mở được trên màn hình điện thoại; không tràn trang theo chiều ngang.
5. Đọc trực tiếp mọi ảnh đã che; rà lại danh tính, avatar, email, tên tổ chức, QR và đường dẫn nội bộ.
6. GitHub Actions thành công và URL công khai trả về đúng phiên bản.
