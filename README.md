# TYG · Sổ tay Lark

Website hướng dẫn tiếng Việt bằng ảnh thật, dành cho nhân sự ít quen công nghệ.

Địa chỉ công khai: https://trungle61.github.io/TYG_Lark_book/

## Bản đầu

Bài 01 **Thiết lập Base nhân viên cho công ty** có 32 bước từ tạo Base đến chọn tài khoản nhân viên và các người phụ trách trên cùng dòng. Cấu trúc có 10 cột; Ban kiểm soát và Chủ tịch bắt buộc theo yêu cầu TYG. Ban kiểm soát dùng Person, bật cho phép nhiều thành viên. Họ Tên dùng Text; các cột tài khoản phải dùng Person và bấm chọn đúng kết quả tìm kiếm.

Bài 02 **Kết nối Base nhân viên với Approval** có 16 bước. Bài mô tả cấu hình mẫu đã khảo sát ngày 01/10/2026: một bước duyệt theo Person, tất cả người được giao cần đồng ý, Auto-approve khi thiếu người duyệt và người gửi vẫn duyệt khi trùng người. Mẫu kết nối tham chiếu sáu trường; chưa dùng Ban kiểm soát hoặc Chủ tịch làm cấp duyệt.

Bài 03 **Đề nghị thanh toán theo quy trình công ty** có 36 bước. Công ty đã có Approval đối chiếu và cập nhật phần cần thiết; công ty chưa có dùng mẫu tham khảo và chốt các cấp riêng. Người duyệt lấy từ cột Person tương ứng trong Base; người dự phòng do công ty chỉ định. Trên 20.000.000 đồng phải qua Ban kiểm soát (tất cả thành viên đồng ý) rồi Chủ tịch theo xác nhận của TYG. Các cấp phía trước và trường hợp trùng người gửi chưa được coi là chính sách chung.

Cả ba bài có ảnh thật, khung đỏ, hướng dẫn bên cạnh, lỗi thường gặp và nguồn chính thức Lark. Base thực hành riêng chỉ lưu thông tin chữ giả; các ô tài khoản để trống. Ảnh bộ chọn tài khoản và ảnh đối chiếu Base mẫu đã che danh tính trước khi đưa vào repository. Attendance chưa được xuất bản. Bài 03 chụp ngưỡng và lựa chọn tất cả đồng ý trên bản sao chưa Publish; phần bộ chọn Base/Contact dùng ảnh đã kiểm tra ở bài 02, có chú thích rõ. Chưa kiểm thử toàn bộ luồng thanh toán lấy từ Base.

Khảo sát biểu mẫu gốc không lưu thay đổi, không Publish và không gửi yêu cầu duyệt thử. Vì vậy chưa xác nhận kết quả chạy thực tế hoặc tác động của cập nhật đối với đơn đang xử lý. Không biến cấu hình mẫu thành chính sách mặc định cho các công ty.

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
