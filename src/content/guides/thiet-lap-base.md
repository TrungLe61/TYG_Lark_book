---
title: "Thiết lập Base nhân viên cho công ty"
shortTitle: "Thiết lập Base nhân viên"
description: "Tạo đủ 10 cột và chọn đúng tài khoản Lark cho nhân viên, cấp trên, Ban kiểm soát và Chủ tịch."
order: 1
updated: "2026-10-01"
verified: "2026-10-01"
keywords: ["tạo Base","nhân viên","Họ Tên","Person","Text","tài khoản","account","Trưởng bộ phận","Kế Toán Trường","ktt","Tổng Giám Đốc","Ban kiểm soát","Chủ tịch","nhiều thành viên","cột","column","Search for members","Send a notification"]
steps:
  - title: "Mở New — Tạo mới và chọn Base"
    action: "Trong Lark Docs, mở Home — Trang chủ. Bấm New — Tạo mới (khung 1), rồi bấm Base (khung 2)."
    result: "Màn hình chọn mẫu Base mở ra."
    image: "thiet-lap-base/new-base.webp"
    imageWidth: 285
    imageHeight: 495
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Mở New — Tạo mới và chọn Base"
    note: "Bạn cần quyền tạo tài liệu trong công ty. Hãy tạo một Base riêng cho công ty mình; không sửa Base của công ty khác."
  - title: "Chọn New Base — Base trống"
    action: "Bấm thẻ New Base có dấu + để bắt đầu từ bảng trống."
    result: "Lark tạo Untitled base — Base chưa đặt tên, có bảng Table và cột Text."
    image: "thiet-lap-base/blank-base.webp"
    imageWidth: 260
    imageHeight: 330
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Chọn New Base — Base trống"
    note: "Ảnh chụp trong tài khoản dùng My Document Library. Tùy công ty, nơi lưu có thể là thư mục hoặc không gian tài liệu khác."
  - title: "Đặt tên Base của công ty"
    action: "Bấm tên Untitled base ở trên cùng. Nhập tên Base rồi nhấn Enter."
    result: "Tên mới hiển thị trên đầu trang. Khi lưu xong, Lark hiển thị Saved to cloud — Đã lưu lên cloud."
    image: "thiet-lap-base/base-title.webp"
    imageWidth: 385
    imageHeight: 125
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Đặt tên Base của công ty"
    value: "Danh sách nhân viên — [Tên công ty]"
    note: "Thay [Tên công ty] bằng tên công ty bạn. Ảnh dùng Base thực hành riêng, không phải tên bắt buộc. Bảng Table bên trong Base sẽ được chọn khi kết nối Approval."
  - title: "Đổi cột đầu tiên thành STT"
    action: "Bấm đúp tiêu đề Text. Trong Field title — Tên cột (khung 1), nhập STT. Giữ Field type — Loại cột là Text (khung 2), rồi bấm Confirm — Xác nhận (khung 3)."
    result: "Cột đầu có tên STT."
    image: "thiet-lap-base/stt-field.webp"
    imageWidth: 335
    imageHeight: 408
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Đổi cột đầu tiên thành STT"
    value: "Field title: STT\nField type: Text"
    note: "Mẫu dùng STT kiểu Text, nhập 1, 2, 3… để dễ đối chiếu. STT không dùng làm người duyệt."
  - title: "Bấm dấu + để thêm cột"
    action: "Bấm dấu + ở cuối hàng tiêu đề, bên phải cột STT."
    result: "Hộp cấu hình cột mới mở ra, có Field title và Field type."
    image: "thiet-lap-base/add-field.webp"
    imageWidth: 490
    imageHeight: 220
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Bấm dấu + để thêm cột"
    note: "Lặp lại thao tác dấu + mỗi khi thêm cột. Khi bảng dài, kéo thanh cuộn ngang ở cuối bảng để thấy dấu + ở bên phải."
  - title: "Tạo cột Họ Tên bằng Text"
    action: "Nhập Họ Tên trong Field title (khung 1). Giữ Text trong Field type (khung 2). Bấm Confirm (khung 3)."
    result: "Cột Họ Tên có biểu tượng chữ A, dùng để nhập họ tên bằng chữ."
    image: "thiet-lap-base/text-field.webp"
    imageWidth: 330
    imageHeight: 462
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo cột Họ Tên bằng Text"
    value: "Field title: Họ Tên\nField type: Text"
    note: "Họ Tên giúp đọc danh sách. Dù nhập đúng tên, cột Text này vẫn chưa chứa tài khoản Lark."
  - title: "Tạo cột Person: chọn đúng loại dữ liệu"
    action: "Bấm dấu +. Nhập Person vào Field title (khung 1). Bấm ô Field type đang là Text (khung 2), rồi chọn Person trong danh sách (khung 3)."
    result: "Field type đổi từ Text sang Person, có biểu tượng hình người."
    image: "thiet-lap-base/person-type.webp"
    imageWidth: 580
    imageHeight: 575
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo cột Person: chọn đúng loại dữ liệu"
    value: "Field title: Person\nField type: Person"
    note: "Có hai việc khác nhau: đặt TÊN cột là Person và chọn LOẠI cột là Person. Chỉ đổi tên cột Text thành Person chưa đủ."
  - title: "Lưu cột Person"
    action: "Kiểm tra Field type hiển thị Person (khung 1), rồi bấm Confirm (khung 2)."
    result: "Hàng tiêu đề có cột Person với biểu tượng hình người."
    image: "thiet-lap-base/person-confirm.webp"
    imageWidth: 338
    imageHeight: 490
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Lưu cột Person"
    value: "Field type: Person"
    note: "Ví dụ này chọn một tài khoản nhân viên trên mỗi dòng. Không điền tài khoản ở Default value — Giá trị mặc định; bạn sẽ chọn riêng cho từng nhân viên sau."
  - title: "Tạo cột Chức vụ"
    action: "Bấm dấu +. Nhập Chức vụ ở Field title (khung 1), giữ Text ở Field type (khung 2), rồi bấm Confirm (khung 3)."
    result: "Có cột Chức vụ kiểu Text."
    image: "thiet-lap-base/job-field.webp"
    imageWidth: 340
    imageHeight: 462
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo cột Chức vụ"
    value: "Field title: Chức vụ\nField type: Text"
  - title: "Tạo cột Phòng ban"
    action: "Bấm dấu +. Nhập Phòng ban ở Field title (khung 1), giữ Text ở Field type (khung 2), rồi bấm Confirm (khung 3)."
    result: "Có cột Phòng ban kiểu Text."
    image: "thiet-lap-base/department-field.webp"
    imageWidth: 340
    imageHeight: 462
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo cột Phòng ban"
    value: "Field title: Phòng ban\nField type: Text"
    note: "Trong bài này Phòng ban là chữ để đối chiếu, giống cấu trúc mẫu."
  - title: "Tạo cột Trưởng bộ phận bằng Person"
    action: "Bấm dấu +. Nhập Trưởng bộ phận ở Field title (khung 1). Đổi Field type sang Person (khung 2), rồi bấm Confirm (khung 3)."
    result: "Có cột Trưởng bộ phận với biểu tượng hình người."
    image: "thiet-lap-base/manager-field.webp"
    imageWidth: 340
    imageHeight: 490
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo cột Trưởng bộ phận bằng Person"
    value: "Field title: Trưởng bộ phận\nField type: Person"
    note: "Cột này chứa tài khoản người phụ trách trực tiếp của từng nhân viên. Đừng tạo kiểu Text rồi gõ tên người phụ trách."
  - title: "Tạo cột Kế Toán Trường bằng Person"
    action: "Bấm dấu +. Nhập Kế Toán Trường ở Field title (khung 1). Chọn Person ở Field type (khung 2), rồi bấm Confirm (khung 3)."
    result: "Có cột Kế Toán Trường với biểu tượng hình người."
    image: "thiet-lap-base/accountant-field-full.webp"
    imageWidth: 340
    imageHeight: 490
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo cột Kế Toán Trường bằng Person"
    value: "Field title: Kế Toán Trường\nField type: Person"
    note: "Dùng tên đầy đủ Kế Toán Trường cho dễ hiểu. Cột này phải là Person để chọn tài khoản người phụ trách."
  - title: "Tạo cột Tổng Giám Đốc bằng Person"
    action: "Bấm dấu +. Nhập Tổng Giám Đốc ở Field title (khung 1). Chọn Person ở Field type (khung 2), rồi bấm Confirm (khung 3)."
    result: "Có cột Tổng Giám Đốc với biểu tượng hình người."
    image: "thiet-lap-base/director-field.webp"
    imageWidth: 340
    imageHeight: 490
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo cột Tổng Giám Đốc bằng Person"
    value: "Field title: Tổng Giám Đốc\nField type: Person"
  - title: "Tạo Ban kiểm soát và cho phép nhiều thành viên"
    action: "Bấm dấu +. Nhập Ban kiểm soát (khung 1), chọn loại Person (khung 2). BẬT Allow adding multiple members in one record — Cho phép nhiều thành viên trong một dòng (khung 3), rồi bấm Confirm."
    result: "Có cột Ban kiểm soát kiểu Person và nút cho phép nhiều thành viên đã bật màu xanh."
    image: "thiet-lap-base/board-field.webp"
    imageWidth: 340
    imageHeight: 490
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo Ban kiểm soát và cho phép nhiều thành viên"
    value: "Field title: Ban kiểm soát\nField type: Person\nAllow adding multiple members in one record: BẬT"
    note: "Ban kiểm soát là cột bắt buộc cho các công ty TYG. Một ô cần chứa các tài khoản thành viên theo danh sách đã xác nhận của công ty; không dùng tên nhóm bằng chữ thay cho tài khoản."
  - title: "Tạo cột Chủ tịch bằng Person"
    action: "Bấm dấu +. Nhập Chủ tịch ở Field title (khung 1). Chọn Person ở Field type (khung 2), rồi bấm Confirm (khung 3)."
    result: "Có cột Chủ tịch với biểu tượng hình người."
    image: "thiet-lap-base/chair-field.webp"
    imageWidth: 340
    imageHeight: 490
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tạo cột Chủ tịch bằng Person"
    value: "Field title: Chủ tịch\nField type: Person"
    note: "Chủ tịch là cột bắt buộc cho các công ty TYG. Chọn tài khoản Chủ tịch áp dụng cho công ty của nhân viên."
  - title: "Kiểm tra các cột nhân viên và cấp phụ trách"
    action: "Đối chiếu hàng tiêu đề với bảng 10 cột ở đầu bài. Person, Trưởng bộ phận, Kế Toán Trường và Tổng Giám Đốc phải có biểu tượng hình người."
    result: "Họ Tên, Chức vụ, Phòng ban là chữ; các cột tài khoản là Person."
    image: "thiet-lap-base/columns-left-full.webp"
    imageWidth: 1444
    imageHeight: 90
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Kiểm tra các cột nhân viên và cấp phụ trách"
    note: "Biểu tượng chữ A ở cột tên Person nghĩa là đang sai loại. Bấm đúp tiêu đề để kiểm tra Field type trước khi nhập nhân viên."
  - title: "Kiểm tra đủ Ban kiểm soát và Chủ tịch"
    action: "Kéo thanh cuộn ngang ở cuối bảng sang phải. Kiểm tra hai cột Ban kiểm soát và Chủ tịch đã có, đều có biểu tượng hình người."
    result: "Bảng có đủ hai cột bắt buộc. Ban kiểm soát đã cho phép nhiều tài khoản."
    image: "thiet-lap-base/columns-right.webp"
    imageWidth: 557
    imageHeight: 92
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Kiểm tra đủ Ban kiểm soát và Chủ tịch"
    note: "Nếu thiếu cột, dùng dấu + để thêm theo bước 14–15. Việc thêm cột chưa tự thêm cấp duyệt trong Approval."
  - title: "Nhập STT cho dòng đầu tiên"
    action: "Bấm đúp ô đầu tiên dưới STT. Nhập 1 rồi nhấn Enter."
    result: "Dòng đầu có STT 1."
    image: "thiet-lap-base/stt-entry.webp"
    imageWidth: 360
    imageHeight: 122
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Nhập STT cho dòng đầu tiên"
    value: "1"
  - title: "Nhập Họ Tên của nhân viên X"
    action: "Trên cùng dòng STT 1, bấm đúp ô Họ Tên, nhập họ tên đầy đủ rồi nhấn Enter."
    result: "Họ tên hiển thị bằng chữ trên dòng nhân viên."
    image: "thiet-lap-base/name-entry.webp"
    imageWidth: 378
    imageHeight: 128
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Nhập Họ Tên của nhân viên X"
    value: "Ví dụ giả: Nhân viên X"
    note: "Trong bảng thật, ghi họ tên thật của nhân viên. X là ký hiệu minh họa, không phải tên tài khoản cần tìm trên Lark."
  - title: "Nhập Chức vụ của X"
    action: "Trên cùng dòng của X, bấm đúp ô Chức vụ, nhập chức vụ rồi nhấn Enter."
    result: "Chức vụ hiển thị trên dòng của X."
    image: "thiet-lap-base/job-entry.webp"
    imageWidth: 375
    imageHeight: 122
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Nhập Chức vụ của X"
    value: "Ví dụ: Nhân viên kinh doanh"
  - title: "Nhập Phòng ban của X"
    action: "Trên cùng dòng của X, bấm đúp ô Phòng ban, nhập phòng ban rồi nhấn Enter."
    result: "Phòng ban hiển thị trên dòng của X."
    image: "thiet-lap-base/department-entry.webp"
    imageWidth: 375
    imageHeight: 122
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Nhập Phòng ban của X"
    value: "Ví dụ: Phòng kinh doanh"
    note: "Thông tin phòng ban giúp kiểm tra đúng người phụ trách; bản thân chữ Phòng ban không tự chọn Trưởng bộ phận."
  - title: "Mở ô Person của X để chọn tài khoản"
    action: "Trên dòng của X, bấm đúp ô dưới cột Person (khung 1)."
    result: "Xuất hiện ô Search for members — Tìm thành viên (khung 2)."
    image: "thiet-lap-base/person-open.webp"
    imageWidth: 469
    imageHeight: 116
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Mở ô Person của X để chọn tài khoản"
    note: "Nếu chỉ thấy ô nhập chữ, dừng lại và kiểm tra Field type. Person đúng loại phải mở bộ chọn thành viên."
  - title: "Kiểm tra tùy chọn Send a notification"
    action: "Trước khi chọn tài khoản, đọc Send a notification — Gửi thông báo ở cuối bộ chọn. Nếu đang thực hành và không cần báo cho người đó, bỏ dấu chọn."
    result: "Tùy chọn thông báo phù hợp với việc bạn đang làm."
    image: "thiet-lap-base/notification.webp"
    imageWidth: 295
    imageHeight: 57
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Kiểm tra tùy chọn Send a notification"
    note: "Ảnh cho thấy tùy chọn đang được tích. Đây là thông báo của Base khi gắn tài khoản, không phải gửi một đơn Approval."
  - title: "Tìm và bấm chọn tài khoản của X"
    action: "Gõ tên tài khoản Lark thật của X trong ô tìm kiếm (khung 1). Khi thấy đúng tài khoản, bấm vào DÒNG KẾT QUẢ (khung 2)."
    result: "Ô Person chứa tài khoản đã chọn. Gõ từ tìm kiếm rồi đóng cửa sổ mà chưa bấm kết quả thì chưa chọn được người."
    image: "thiet-lap-base/person-search.webp"
    imageWidth: 300
    imageHeight: 245
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Tìm và bấm chọn tài khoản của X"
    value: "Tìm tài khoản của NHÂN VIÊN X"
    note: "Tên tìm kiếm và kết quả trong ảnh đã che. X/A/B/C/D1/D2/E chỉ là ký hiệu; thay bằng tài khoản thật của công ty. Nếu nhiều người trùng tên, đối chiếu bộ phận hoặc hỏi người quản lý trước khi chọn."
  - title: "Đối chiếu Họ Tên và tài khoản Person"
    action: "Kiểm tra Họ Tên là họ tên nhân viên; Person là đúng tài khoản Lark của người đó."
    result: "Tên hiển thị của tài khoản có thể khác cách ghi Họ Tên, nhưng hai ô phải cùng một người."
    image: "thiet-lap-base/person-result.webp"
    imageWidth: 729
    imageHeight: 140
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Đối chiếu Họ Tên và tài khoản Person"
    note: "Ảnh đối chiếu lấy từ Base mẫu đã có tài khoản; danh tính đã che. Họ Tên kiểu Text không tự chuyển thành tài khoản Person."
  - title: "Chọn Trưởng bộ phận A cho X"
    action: "Trên DÒNG CỦA X, bấm đúp ô Trưởng bộ phận (khung 1). Tìm tên tài khoản người A trong Search for members (khung 2), rồi bấm kết quả đúng như bước chọn Person."
    result: "Ô Trưởng bộ phận trên dòng X chứa tài khoản A."
    image: "thiet-lap-base/manager-picker-full.webp"
    imageWidth: 305
    imageHeight: 116
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Chọn Trưởng bộ phận A cho X"
    value: "A = người phụ trách trực tiếp của X"
    note: "Chọn A theo quan hệ phụ trách đã được công ty xác nhận. Không tự điền X vào cột này, cũng không mặc định lấy người tạo Base."
  - title: "Chọn Kế Toán Trường B cho X"
    action: "Trên dòng của X, bấm đúp ô Kế Toán Trường (khung 1). Tìm và chọn tài khoản Kế Toán Trường B của công ty (khung 2)."
    result: "Ô Kế Toán Trường trên dòng X chứa tài khoản B."
    image: "thiet-lap-base/accountant-picker-full.webp"
    imageWidth: 305
    imageHeight: 116
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Chọn Kế Toán Trường B cho X"
    value: "B = Kế Toán Trường áp dụng cho X"
  - title: "Chọn Tổng giám đốc C cho X"
    action: "Trên dòng của X, bấm đúp ô Tổng Giám Đốc (khung 1). Tìm và chọn tài khoản Tổng giám đốc C của công ty (khung 2)."
    result: "Ô Tổng Giám Đốc trên dòng X chứa tài khoản C."
    image: "thiet-lap-base/director-picker.webp"
    imageWidth: 305
    imageHeight: 116
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Chọn Tổng giám đốc C cho X"
    value: "C = Tổng giám đốc công ty của X"
  - title: "Chọn các thành viên Ban kiểm soát cho X"
    action: "Trên dòng của X, bấm đúp ô Ban kiểm soát (khung 1). Tìm và chọn từng tài khoản D1, D2… theo danh sách Ban kiểm soát áp dụng cho công ty (khung 2). Nếu bộ chọn đóng, mở lại ô để thêm thành viên tiếp theo."
    result: "Cùng một ô Ban kiểm soát có đủ các tài khoản D1, D2… đã chọn."
    image: "thiet-lap-base/board-picker.webp"
    imageWidth: 305
    imageHeight: 116
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Chọn các thành viên Ban kiểm soát cho X"
    value: "D1, D2… = thành viên Ban kiểm soát"
    note: "Nếu chọn người sau làm mất người trước, kiểm tra lại Allow adding multiple members in one record đã BẬT hay chưa. Không gõ “D1, D2” thành một chuỗi chữ."
  - title: "Chọn Chủ tịch E cho X"
    action: "Trên dòng của X, bấm đúp ô Chủ tịch (khung 1). Tìm và chọn tài khoản Chủ tịch E áp dụng cho công ty (khung 2)."
    result: "Ô Chủ tịch trên dòng X chứa tài khoản E."
    image: "thiet-lap-base/chair-picker.webp"
    imageWidth: 305
    imageHeight: 116
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Chọn Chủ tịch E cho X"
    value: "E = Chủ tịch áp dụng cho công ty của X"
    note: "Ban kiểm soát và Chủ tịch phải có trong cấu trúc Base của công ty. Chưa biết đúng tài khoản thì nhờ người phụ trách xác nhận; không chọn một người bất kỳ để lấp ô."
  - title: "Thêm từng nhân viên còn lại"
    action: "Dùng dòng trống tiếp theo hoặc bấm Add Record — Thêm dòng. Lặp lại việc nhập chữ và chọn tài khoản cho từng nhân viên."
    result: "Mỗi nhân viên có một dòng riêng, với đúng các người phụ trách của chính nhân viên đó."
    image: "thiet-lap-base/add-record.webp"
    imageWidth: 540
    imageHeight: 315
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Thêm từng nhân viên còn lại"
    note: "A/B/C/D/E cũng là nhân sự thì vẫn có dòng riêng của họ. Tuyến phụ trách của họ phải theo danh sách công ty xác nhận; không suy ra từ ví dụ của X. Chỉ dùng chung người phụ trách khi thực tế đã xác nhận giống nhau."
  - title: "Kiểm tra trước khi kết nối Approval"
    action: "Đối chiếu từng dòng với danh sách nhân sự đã xác nhận: Person đúng nhân viên; Trưởng bộ phận, Kế Toán Trường, Tổng Giám Đốc, Ban kiểm soát và Chủ tịch đúng tài khoản. Kiểm tra Lark báo Saved to cloud."
    result: "Base của công ty có đủ 10 cột và dữ liệu tài khoản đã được kiểm tra. Có thể sang bài Kết nối Base với Approval."
    image: "thiet-lap-base/columns-right.webp"
    imageWidth: 557
    imageHeight: 92
    alt: "Ảnh thật trong Lark, khung đỏ chỉ vị trí thao tác: Kiểm tra trước khi kết nối Approval"
    note: "Ảnh bước này chỉ minh họa vị trí các cột, chưa phải dòng đã điền đủ. Base thực hành chỉ lưu chữ giả; ô tài khoản được để trống để không gắn người thật hoặc gửi thông báo. Bài kết nối hiện tại vẫn chỉ có một bước duyệt theo Person; chưa dùng các cột cấp trên làm luồng nhiều cấp."
faqs:
  - question: "Tôi đặt tên cột Person nhưng bên cạnh vẫn có chữ A?"
    answer: "Tên cột và loại cột là hai việc khác nhau. Bấm đúp tiêu đề, mở Field type và chọn Person. Với cột Text đang có tên người, kiểm tra từng tài khoản sau khi đổi loại; không coi đổi loại là bảo đảm tự tìm đúng tất cả người."
  - question: "Tôi đã nhập Họ Tên, có cần chọn lại Person không?"
    answer: "Có. Họ Tên là chữ để đọc. Person phải chọn tài khoản Lark của cùng người đó bằng Search for members và bấm dòng kết quả."
  - question: "Không thấy tài khoản cần chọn?"
    answer: "Kiểm tra đúng công ty đang đăng nhập, tên hiển thị của tài khoản và tài khoản đã có trong danh sách thành viên được phép tìm. Nhờ quản trị viên kiểm tra nếu chưa có. Không thay bằng việc gõ tên vào cột Text."
  - question: "Hai người trùng tên thì chọn thế nào?"
    answer: "Đối chiếu bộ phận và thông tin tài khoản với người quản lý. Nếu vẫn chưa chắc, dừng chọn để xác nhận đúng người; không chọn kết quả đầu tiên theo thói quen."
  - question: "Một thành viên Ban kiểm soát bị thay thế khi thêm người tiếp theo?"
    answer: "Bấm đúp tiêu đề Ban kiểm soát. Kiểm tra Field type là Person và bật Allow adding multiple members in one record, rồi Confirm. Sau đó chọn lại đủ các thành viên đã được công ty xác nhận."
  - question: "Có thể ghi chữ “Ban kiểm soát” hoặc “Chủ tịch” vào ô không?"
    answer: "Không dùng chữ thay cho tài khoản. Ban kiểm soát cần các tài khoản thành viên D1, D2…; Chủ tịch cần tài khoản E. Hai cột này dùng Person và là cột bắt buộc trong Base công ty theo yêu cầu TYG."
  - question: "Các nhân viên cùng công ty có thể dùng cùng Kế Toán Trường, Tổng giám đốc, Ban kiểm soát và Chủ tịch?"
    answer: "Có thể chọn cùng tài khoản nếu đúng danh sách công ty đã xác nhận. Trưởng bộ phận có thể khác giữa các nhân viên. Không mặc định sao chép mọi người phụ trách từ một dòng sang tất cả dòng."
  - question: "Base tự tạo luồng duyệt theo các cấp trên chưa?"
    answer: "Chưa. Base chỉ lưu các tài khoản để biểu mẫu có thể tham chiếu. Còn phải cấu hình từng bước và điều kiện trong Process Design của Approval. Bài kế tiếp chỉ hướng dẫn mẫu một bước theo Person; chưa đặt chính sách duyệt nhiều cấp."
changes:
  - date: "2026-10-01"
    text: "Đổi tên cột ktt thành Kế Toán Trường theo yêu cầu TYG; cập nhật hướng dẫn, ví dụ và ảnh thật trong Base thực hành."
  - date: "2026-10-01"
    text: "Thêm bài trước phần kết nối Approval: 10 cột, phân biệt Text và Person, ví dụ X/A/B/C/D1/D2/E; Ban kiểm soát và Chủ tịch bắt buộc, Ban kiểm soát cho phép nhiều tài khoản theo xác nhận của TYG."
sources:
  - title: "Dùng cột Person trong Base (tiếng Anh)"
    url: "https://www.larksuite.com/hc/en-US/articles/360048488182-use-person-fields-in-base"
---

**Trước khi bắt đầu:** người thực hiện cần quyền tạo và sửa Base trong công ty. Chuẩn bị danh sách nhân viên và các người phụ trách đã được công ty xác nhận, cùng tài khoản Lark tương ứng. Quyền quản lý Base để kết nối Approval sẽ được kiểm tra ở bài kế tiếp.

**Mỗi dòng = một nhân viên.** Trên dòng đó, Person là tài khoản của nhân viên; các cột bên phải là tài khoản người phụ trách của nhân viên này. Nhân viên X không có nghĩa là tất cả cột đều chọn X.

## Base công ty cần đủ 10 cột

| Tên cột | Loại cột cần chọn | Điền gì trên dòng của X? |
| --- | --- | --- |
| STT | Text — Văn bản | 1 |
| Họ Tên | Text — Văn bản | Họ tên đầy đủ của X |
| Person | Person — Tài khoản người | Chọn tài khoản Lark của X |
| Chức vụ | Text — Văn bản | Nhân viên kinh doanh (ví dụ) |
| Phòng ban | Text — Văn bản | Phòng kinh doanh (ví dụ) |
| Trưởng bộ phận | Person — Tài khoản người | Chọn A, người phụ trách trực tiếp của X |
| Kế Toán Trường | Person — Tài khoản người | Chọn B, Kế Toán Trường của công ty |
| Tổng Giám Đốc | Person — Tài khoản người | Chọn C, Tổng giám đốc của công ty |
| Ban kiểm soát | Person — cho phép nhiều thành viên | Chọn các tài khoản D1, D2… |
| Chủ tịch | Person — Tài khoản người | Chọn E, Chủ tịch áp dụng cho công ty |

> **Ban kiểm soát và Chủ tịch là hai cột bắt buộc cho các công ty TYG.** Cột Ban kiểm soát bật **Allow adding multiple members in one record** để lưu nhiều tài khoản trong một ô.

## Hiểu ví dụ trước khi điền

X/A/B/C/D1/D2/E là **ký hiệu giả để giải thích**, không phải tên tài khoản có thể tìm trên Lark. Trong công ty của bạn, thay từng ký hiệu bằng đúng tài khoản thật đã xác nhận.

| Dòng nhân viên | Person | Trưởng bộ phận | Kế Toán Trường | Tổng Giám Đốc | Ban kiểm soát | Chủ tịch |
| --- | --- | --- | --- | --- | --- | --- |
| Nhân viên X | Tài khoản X | Tài khoản A | Tài khoản B | Tài khoản C | Tài khoản D1 và D2… | Tài khoản E |

Trên điện thoại, vuốt ngang bảng ví dụ để xem các cột bên phải.

**Họ Tên là chữ. Person là tài khoản.** Gõ tên vào cột Họ Tên không tự chọn tài khoản và không tự xác định người duyệt. Trong cột Person, phải mở bộ chọn thành viên và **bấm vào kết quả đúng người**.

Ảnh được chụp trong Base thực hành riêng ngày **01/10/2026**, có tên và thông tin chữ giả. Thông tin tài khoản trong bộ chọn và ảnh đối chiếu từ Base mẫu đã được che. Khi làm trên bảng thật, đối chiếu từng dòng trước khi kết nối Approval.
