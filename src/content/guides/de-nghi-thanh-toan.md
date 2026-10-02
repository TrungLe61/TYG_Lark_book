---
title: "Đề nghị thanh toán theo quy trình công ty"
shortTitle: "Đề nghị thanh toán"
description: "Đối chiếu Approval đang có, lấy người duyệt từ Base và thiết lập nhánh trên 20 triệu qua Ban kiểm soát rồi Chủ tịch."
order: 3
updated: "2026-10-02"
verified: "2026-10-01"
keywords: ["đề nghị thanh toán","DNTT","thanh toán","20 triệu","Ban kiểm soát","tất cả đồng ý","Chủ tịch","người dự phòng","Kế toán kiểm tra","Kế Toán Trường","quy trình công ty","approval","base","Copy Approval","Everyone assigned","Approver deduplication"]
steps:
  - title: "Tìm Đề nghị thanh toán đang có"
    action: "Trong Approval Admin — Quản trị phê duyệt, nhập tên biểu mẫu vào Search — Tìm kiếm (khung 1). Bấm biểu tượng bút chì ở đúng dòng (khung 2) để xem cấu hình."
    result: "Bạn thấy đúng tên biểu mẫu của công ty; ghi lại thứ tự duyệt và các điều kiện trước khi thay đổi."
    image: "de-nghi-thanh-toan/find.webp"
    imageWidth: 1008
    imageHeight: 185
    alt: "Ảnh Lark thật: Tìm Đề nghị thanh toán đang có; khung đỏ và số chỉ vị trí thao tác"
    value: "Tên Đề nghị thanh toán của công ty bạn"
    note: "Tên trong ảnh là mẫu đã khảo sát. Nếu công ty đã có quy trình hoạt động, dùng quy trình đó để đối chiếu. Không tạo thêm một biểu mẫu vận hành cùng chức năng."
  - title: "Tạo bản thực hành từ quy trình của công ty"
    action: "Trở lại danh sách. Bấm biểu tượng hai ô có dấu + cạnh bút chì để mở Copy Approval — Sao chép. Nhập tên bản thực hành rồi bấm Confirm — Xác nhận."
    result: "Một trang chỉnh sửa bản sao mở, tên có chữ Thực hành."
    image: "de-nghi-thanh-toan/copy.webp"
    imageWidth: 419
    imageHeight: 215
    alt: "Ảnh Lark thật: Tạo bản thực hành từ quy trình của công ty; khung đỏ và số chỉ vị trí thao tác"
    value: "[Tên công ty] • Thực hành Đề nghị thanh toán"
    caption: "Ảnh bản sao thực hành, chưa Publish"
    note: "Chỉ làm bước này khi được người phụ trách cho phép tạo khu thực hành. Copy chưa phải Publish. Giữ trang đang mở; chưa xác nhận có chức năng lưu nháp riêng. Công ty chưa có biểu mẫu có thể dùng một mẫu tham khảo được người phụ trách chỉ định rồi sao chép theo cách này."
  - title: "Kiểm tra tên và nhóm biểu mẫu"
    action: "Ở Basic Info — Thông tin cơ bản, kiểm tra Name — Tên và Group — Nhóm. Đặt tên rõ công ty và mục đích sử dụng."
    result: "Bạn phân biệt được bản thực hành với biểu mẫu đang dùng; Group là Finance — Tài chính nếu công ty phân nhóm như mẫu."
    image: "de-nghi-thanh-toan/basic.webp"
    imageWidth: 574
    imageHeight: 244
    alt: "Ảnh Lark thật: Kiểm tra tên và nhóm biểu mẫu; khung đỏ và số chỉ vị trí thao tác"
    caption: "Ảnh bản thực hành, chưa Publish"
    note: "Không sao chép mù quáng quyền quản trị, người được gửi hoặc người nhận CC từ công ty khác."
  - title: "Đối chiếu các công cụ ở Form Design"
    action: "Bấm Form Design — Thiết kế biểu mẫu. Xem các công cụ bên trái. Với biểu mẫu đã có, chỉ kiểm tra trường tương ứng ở giữa; với trường còn thiếu, bấm đúng loại công cụ để thêm."
    result: "Bạn nhận biết được Short answer — Văn bản ngắn; Paragraph — Đoạn văn; Amount — Số tiền; Single select — Chọn một; Date — Ngày; Details/Table — Bảng chi tiết; Attachment — Tệp; Department — Phòng ban; Contacts — Tài khoản."
    image: "de-nghi-thanh-toan/widgets.webp"
    imageWidth: 331
    imageHeight: 637
    alt: "Ảnh Lark thật: Đối chiếu các công cụ ở Form Design; khung đỏ và số chỉ vị trí thao tác"
    note: "Bước 5–18 dùng để đối chiếu biểu mẫu chung. Nếu biểu mẫu công ty đã đủ và đúng, chuyển đến bước 19. Giữ các trường riêng mà công ty đang cần."
  - title: "Kiểm tra Bộ phận đề nghị"
    action: "Bấm trường Bộ phận đề nghị ở giữa. Nếu tạo mới, dùng Department — Phòng ban; nhập Title — Tiêu đề và chọn One department — Một phòng ban."
    result: "Đây là trường chọn phòng ban Lark, có dấu * nếu Required — Bắt buộc được bật."
    image: "de-nghi-thanh-toan/department.webp"
    imageWidth: 345
    imageHeight: 620
    alt: "Ảnh Lark thật: Kiểm tra Bộ phận đề nghị; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Bộ phận đề nghị\nSelection options: One department\nRequired: bật"
    caption: "Ảnh cấu hình mẫu hiện có, khảo sát chỉ đọc"
    note: "Mẫu gốc ghi “Bộ phần đề nghị”. Khi tạo mới, dùng tên rõ nghĩa “Bộ phận đề nghị”. Kiểu Department khác với cột Phòng ban dạng Text trong Base."
  - title: "Kiểm tra tài khoản Người đề nghị"
    action: "Bấm Người đề nghị. Nếu tạo mới, dùng Contacts — Tài khoản; chọn Single option — Một tài khoản. Oneself: Yes cho phép người gửi chọn chính mình."
    result: "Người đề nghị là tài khoản Lark, không phải ô nhập tên bằng chữ."
    image: "de-nghi-thanh-toan/requester.webp"
    imageWidth: 345
    imageHeight: 670
    alt: "Ảnh Lark thật: Kiểm tra tài khoản Người đề nghị; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Người đề nghị\nAnswer type: Single option\nOneself: Yes\nRequired: bật"
    note: "Oneself: Yes không chứng minh biểu mẫu tự điền hoặc chỉ cho chọn bản thân. Đây cũng không phải tài khoản người duyệt lấy từ Base."
  - title: "Kiểm tra Ngày đề nghị"
    action: "Bấm Ngày đề nghị. Dùng Date — Ngày, giữ định dạng YYYY-MM-DD và kiểm tra Default value — Giá trị mặc định."
    result: "Ngày hiển thị theo năm-tháng-ngày. Mẫu dùng Today — Hôm nay và Required — Bắt buộc."
    image: "de-nghi-thanh-toan/request-date.webp"
    imageWidth: 345
    imageHeight: 635
    alt: "Ảnh Lark thật: Kiểm tra Ngày đề nghị; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Ngày đề nghị\nDate/time format: YYYY-MM-DD\nDefault value: Today\nRequired: bật"
  - title: "Kiểm tra Nội dung thanh toán"
    action: "Bấm Nội dung thanh toán. Dùng Paragraph — Đoạn văn để người gửi mô tả nội dung, mục đích và căn cứ thanh toán."
    result: "Trường nhập được nhiều dòng, có dấu * khi Required được bật."
    image: "de-nghi-thanh-toan/content.webp"
    imageWidth: 345
    imageHeight: 425
    alt: "Ảnh Lark thật: Kiểm tra Nội dung thanh toán; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Nội dung thanh toán\nRequired: bật"
  - title: "Kiểm tra Số tiền đề nghị thanh toán"
    action: "Bấm Số tiền đề nghị thanh toán. Dùng Amount — Số tiền; chọn Currency — Tiền tệ là VND-Dong."
    result: "Đây là số tiền dùng để quyết định có chuyển lên Ban kiểm soát và Chủ tịch hay không."
    image: "de-nghi-thanh-toan/amount.webp"
    imageWidth: 345
    imageHeight: 663
    alt: "Ảnh Lark thật: Kiểm tra Số tiền đề nghị thanh toán; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Số tiền đề nghị thanh toán\nCurrency: VND-Dong\nRequired: bật"
    note: "Không dùng Số tiền hóa đơn làm điều kiện thay cho số tiền đề nghị. Kiểm tra Required ở phía dưới bảng cấu hình. Không thêm tiền tệ khác vào nhánh 20 triệu đồng khi chưa có quy tắc quy đổi."
  - title: "Kiểm tra các lựa chọn Loại thanh toán"
    action: "Bấm Loại thanh toán. Dùng Single select — Chọn một; chọn Add options manually — Tự nhập lựa chọn rồi đối chiếu các dòng."
    result: "Người gửi chọn một loại. Mẫu có ba lựa chọn bên dưới."
    image: "de-nghi-thanh-toan/payment-type.webp"
    imageWidth: 345
    imageHeight: 671
    alt: "Ảnh Lark thật: Kiểm tra các lựa chọn Loại thanh toán; khung đỏ và số chỉ vị trí thao tác"
    value: "Thanh toán nhà cung cấp\nThanh toán chi phí\nHoàn ứng"
    note: "Danh sách này lấy từ mẫu tham khảo. Công ty có thể giữ danh sách đang dùng nếu phù hợp; không sửa chỉ để giống hình."
  - title: "Kiểm tra Ngày cần thanh toán"
    action: "Bấm Ngày cần thanh toán. Dùng Date — Ngày, định dạng YYYY-MM-DD và bật Required — Bắt buộc."
    result: "Người gửi ghi ngày mong muốn thanh toán, khác với ngày lập đề nghị."
    image: "de-nghi-thanh-toan/due-date.webp"
    imageWidth: 345
    imageHeight: 635
    alt: "Ảnh Lark thật: Kiểm tra Ngày cần thanh toán; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Ngày cần thanh toán\nDate/time format: YYYY-MM-DD\nRequired: bật"
    note: "Mẫu đặt Today — Hôm nay làm mặc định. Người gửi vẫn cần kiểm tra ngày thực tế cần thanh toán."
  - title: "Kiểm tra Hình thức thanh toán"
    action: "Bấm Hình thức thanh toán. Dùng Single select — Chọn một và đối chiếu các lựa chọn thủ công."
    result: "Người gửi chọn một hình thức thanh toán."
    image: "de-nghi-thanh-toan/payment-method.webp"
    imageWidth: 345
    imageHeight: 670
    alt: "Ảnh Lark thật: Kiểm tra Hình thức thanh toán; khung đỏ và số chỉ vị trí thao tác"
    value: "Chuyển khoản\nTiền mặt\nGiải ngân"
    note: "Đây là lựa chọn của mẫu, không tự tạo lệnh chuyển tiền hoặc kết nối ngân hàng."
  - title: "Kiểm tra bảng Chi tiết chứng từ"
    action: "Bấm tiêu đề Chi tiết chứng từ thanh toán. Nếu chưa có, thêm Details/Table — Bảng chi tiết; chọn Landscape — Bố trí ngang như mẫu."
    result: "Có một nhóm chi tiết, bên trong chứa Số hóa đơn và Ngày hóa đơn. Người gửi có thể bấm Add details — Thêm dòng để ghi nhiều chứng từ."
    image: "de-nghi-thanh-toan/details.webp"
    imageWidth: 345
    imageHeight: 560
    alt: "Ảnh Lark thật: Kiểm tra bảng Chi tiết chứng từ; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Chi tiết chứng từ thanh toán\nOrientation: Landscape"
    note: "Khi tạo trường ở bước 14–15, đặt chúng bên trong nhóm Details/Table này, không tạo thành các trường rời ngoài bảng."
  - title: "Kiểm tra Số hóa đơn trong bảng chi tiết"
    action: "Bấm Số hóa đơn bên trong bảng. Nếu tạo mới, thêm Short answer — Văn bản ngắn vào bảng rồi đặt Title và bật Required."
    result: "Mỗi dòng chứng từ có một ô Số hóa đơn."
    image: "de-nghi-thanh-toan/invoice-number.webp"
    imageWidth: 345
    imageHeight: 500
    alt: "Ảnh Lark thật: Kiểm tra Số hóa đơn trong bảng chi tiết; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Số hóa đơn\nType: Short answer\nRequired: bật"
    note: "Dùng văn bản để giữ nguyên ký hiệu, chữ và số 0 ở đầu; không dùng Number."
  - title: "Kiểm tra Ngày hóa đơn trong bảng chi tiết"
    action: "Bấm Ngày hóa đơn bên trong bảng. Dùng Date — Ngày, định dạng YYYY-MM-DD và bật Required."
    result: "Ngày hóa đơn nằm cùng dòng với số hóa đơn."
    image: "de-nghi-thanh-toan/invoice-date.webp"
    imageWidth: 345
    imageHeight: 635
    alt: "Ảnh Lark thật: Kiểm tra Ngày hóa đơn trong bảng chi tiết; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Ngày hóa đơn\nDate/time format: YYYY-MM-DD\nRequired: bật"
    note: "Mẫu mặc định Today. Người gửi phải sửa thành ngày ghi trên hóa đơn, không mặc nhiên dùng ngày hôm nay."
  - title: "Kiểm tra Số tiền hóa đơn"
    action: "Bấm Số tiền hóa đơn. Dùng Amount — Số tiền, chọn VND-Dong và kiểm tra Required ở phía dưới."
    result: "Biểu mẫu có số tiền hóa đơn riêng, ngoài nhóm chi tiết như mẫu đã khảo sát."
    image: "de-nghi-thanh-toan/invoice-amount.webp"
    imageWidth: 345
    imageHeight: 663
    alt: "Ảnh Lark thật: Kiểm tra Số tiền hóa đơn; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Số tiền hóa đơn\nCurrency: VND-Dong\nRequired: bật"
    note: "Mẫu có trường này riêng với Số tiền đề nghị thanh toán; chưa có bằng chứng tự tính tổng hay tự đối chiếu hai số tiền. Không ghi rằng Lark đã kiểm tra sự khớp đúng."
  - title: "Kiểm tra Hồ sơ đính kèm"
    action: "Bấm Hồ sơ đính kèm. Dùng Attachment — Tệp đính kèm và bật Required — Bắt buộc."
    result: "Người gửi phải cung cấp tệp trước khi gửi đề nghị."
    image: "de-nghi-thanh-toan/attachment.webp"
    imageWidth: 345
    imageHeight: 405
    alt: "Ảnh Lark thật: Kiểm tra Hồ sơ đính kèm; khung đỏ và số chỉ vị trí thao tác"
    value: "Title: Hồ sơ đính kèm\nRequired: bật"
    note: "Danh mục chứng từ cần nộp do công ty quy định. Trường tệp không chứng minh hồ sơ đã đầy đủ về nghiệp vụ."
  - title: "Giữ riêng Base nhà cung cấp"
    action: "Bấm nhóm có Mã số thuế, Tên Nhà Cung Cấp/Tên Tài Khoản, Số Tài khoản, Tại Ngân Hàng và Chi Nhánh. Kiểm tra Select a base — Chọn Base và Select a table — Chọn bảng."
    result: "Nhóm tham chiếu đúng danh mục nhà cung cấp của công ty và đủ các trường thanh toán cần dùng."
    image: "de-nghi-thanh-toan/supplier.webp"
    imageWidth: 345
    imageHeight: 678
    alt: "Ảnh Lark thật: Giữ riêng Base nhà cung cấp; khung đỏ và số chỉ vị trí thao tác"
    value: "Mã số thuế\nTên Nhà Cung Cấp/Tên Tài Khoản\nSố Tài khoản\nTại Ngân Hàng\nChi Nhánh"
    caption: "Ảnh kết nối nhà cung cấp của mẫu, tên Base đã che"
    note: "Không đổi nhóm này thành Base nhân viên. Nếu công ty chưa có danh mục nhà cung cấp, người phụ trách tài chính cần chuẩn bị riêng. Một lần chọn phải lấy thông tin ngân hàng từ cùng bản ghi; đối chiếu trước khi sử dụng."
  - title: "Thêm riêng nhóm Base nhân viên nếu còn thiếu"
    action: "Trong Form Design, bấm Data from Base — Dữ liệu từ Base để thêm một nhóm riêng cho nhân viên và người phụ trách."
    result: "Có nhóm thứ hai, tách với nhóm nhà cung cấp."
    image: "de-nghi-thanh-toan/employee-widget.webp"
    imageWidth: 168
    imageHeight: 59
    alt: "Ảnh Lark thật: Thêm riêng nhóm Base nhân viên nếu còn thiếu; khung đỏ và số chỉ vị trí thao tác"
    caption: "Ảnh thao tác trên bản thực hành, chưa Publish"
    note: "Nếu biểu mẫu đã có nhóm Base nhân viên đúng, chỉ mở nhóm đó để kiểm tra. Không thêm trùng."
  - title: "Chọn Base nhân viên cùng công ty"
    action: "Ở nhóm mới, chọn Select a base — Chọn Base rồi Select a table — Chọn bảng, như bài 02. Dùng Base đã chuẩn bị ở bài 01."
    result: "Tên Base và bảng đều đúng công ty đang thiết lập Approval."
    image: "ket-noi-base/chon-base.webp"
    imageWidth: 1052
    imageHeight: 690
    alt: "Ảnh thật từ bài 02 minh họa thao tác: Chọn Base nhân viên cùng công ty"
    caption: "Ảnh kết nối đã kiểm tra ở bài 02"
    note: "Nếu báo No permissions — Không có quyền hoặc No available base — Không có Base, dừng tại đây và kiểm tra công ty đăng nhập, quyền quản lý Base. Không dùng Base của công ty khác để thay tạm."
  - title: "Tham chiếu tài khoản và các cột người duyệt"
    action: "Ở Reference field — Trường tham chiếu, bấm Add — Thêm để chọn Person và từng cột người phụ trách cần dùng."
    result: "Mỗi cột tài khoản có biểu tượng hình người, cùng nằm trong một nhóm dữ liệu của một dòng nhân viên."
    image: "ket-noi-base/reference-field.webp"
    imageWidth: 350
    imageHeight: 320
    alt: "Ảnh thật từ bài 02 minh họa thao tác: Tham chiếu tài khoản và các cột người duyệt"
    caption: "Ảnh kết nối đã kiểm tra ở bài 02"
    value: "Person\nTrưởng bộ phận (nếu quy trình có)\nKế toán kiểm tra (nếu quy trình có)\nKế Toán Trường (nếu quy trình có)\nTổng Giám Đốc (nếu quy trình có)\nBan kiểm soát\nChủ tịch"
    note: "Ảnh minh họa thao tác Add đang có Person. Hãy thêm đúng các cột trong danh sách của công ty. Ban kiểm soát là Person cho phép nhiều thành viên; các cột tài khoản còn lại dùng Person một người. Cột Họ Tên kiểu Text không dùng làm người duyệt."
  - title: "Kiểm tra phạm vi nhân viên được chọn"
    action: "Đọc Submitter can select data from — Người gửi được chọn dữ liệu từ. Đối chiếu All data — Tất cả dữ liệu và Visible data in base — Dữ liệu nhìn thấy trong Base với quyền của công ty."
    result: "Phạm vi chọn bản ghi phù hợp; người gửi biết phải chọn dòng của chính mình."
    image: "ket-noi-base/all-data.webp"
    imageWidth: 350
    imageHeight: 118
    alt: "Ảnh thật từ bài 02 minh họa thao tác: Kiểm tra phạm vi nhân viên được chọn"
    caption: "Ảnh kết nối đã kiểm tra ở bài 02"
    note: "Ảnh bài 02 đang chọn All data. Tùy chọn này không tự lọc theo người gửi. Kiểm tra bằng quyền của nhân viên trước khi dùng thật; không để người gửi chọn tùy ý một dòng nhân viên khác rồi lấy người duyệt sai."
  - title: "Đối chiếu các cấp trước nhánh số tiền"
    action: "Mở Process Design — Thiết kế luồng duyệt. So sánh các ô Approval — Duyệt với bảng quy trình của công ty ở đầu bài."
    result: "Các cấp và thứ tự khớp quy trình đã được người phụ trách xác nhận."
    image: "de-nghi-thanh-toan/process.webp"
    imageWidth: 511
    imageHeight: 646
    alt: "Ảnh Lark thật: Đối chiếu các cấp trước nhánh số tiền; khung đỏ và số chỉ vị trí thao tác"
    caption: "Ảnh bản thực hành: nhánh 20 triệu; tài khoản đã che"
    note: "Ảnh minh họa TGĐ trước Ban kiểm soát; không bắt tất cả công ty thêm các bước như mẫu. Công ty không cần Kế toán kiểm tra thì bỏ bước đó trên bản thực hành sau khi đã thống nhất, thay vì tạo ô trống để tự thông qua. Chưa biết thứ tự thì dừng và hỏi chủ quy trình."
  - title: "Đổi nguồn người duyệt sang trường trong biểu mẫu"
    action: "Bấm một ô duyệt cần cập nhật. Giữ Manual approval — Duyệt thủ công, mở Set Approvers — Thiết lập người duyệt rồi chọn Contacts in the form — Tài khoản trong biểu mẫu."
    result: "Nguồn người duyệt chuyển từ tài khoản được chọn cố định sang trường tài khoản trong biểu mẫu."
    image: "de-nghi-thanh-toan/contacts.webp"
    imageWidth: 530
    imageHeight: 413
    alt: "Ảnh Lark thật: Đổi nguồn người duyệt sang trường trong biểu mẫu; khung đỏ và số chỉ vị trí thao tác"
    caption: "Ảnh thật bài 02 minh họa cách chọn nguồn người duyệt"
    value: "Manual approval\nContacts in the form"
    note: "Làm trong bản thực hành. Nếu bước đang dùng Manager hoặc Department supervisor, ghi nhận quy tắc hiện có trước khi đổi; các lựa chọn đó lấy cơ cấu từ Lark Admin, không tự đọc cột Trưởng bộ phận trong Base."
  - title: "Chọn đúng cột Base cho từng cấp"
    action: "Ở Contact — Tài khoản, bỏ trường chọn sai nếu có rồi chọn đúng cột theo bảng ánh xạ ở đầu bài. Ở Approval Type — Cách lấy người duyệt, chọn Contact — Chính tài khoản đó."
    result: "Bước duyệt lấy đúng tài khoản từ cột của cấp duyệt trên dòng nhân viên được chọn."
    image: "ket-noi-base/person.webp"
    imageWidth: 530
    imageHeight: 302
    alt: "Ảnh thật từ bài 02 minh họa thao tác: Chọn đúng cột Base cho từng cấp"
    caption: "Ảnh bài 02 đang chọn Person để minh họa bộ chọn Contact"
    value: "Kế toán kiểm tra → Kế toán kiểm tra\nKế Toán Trường → Kế Toán Trường\nTGĐ → Tổng Giám Đốc\nBKS → Ban kiểm soát\nChủ tịch → Chủ tịch\nApproval Type: Contact"
    note: "Bài 03 phải chọn cột người duyệt của từng cấp, không chọn Person như ảnh bài 02. Person là tài khoản nhân viên đề nghị. Lặp thao tác cho từng ô duyệt, kể cả TGĐ xuất hiện ở hai nhánh. Nếu không thấy tên cột, quay lại Reference field để thêm cột đó trước."
  - title: "Chọn người dự phòng khi thiếu tài khoản"
    action: "Ở từng bước duyệt bắt buộc, tìm When approver is empty — Khi người duyệt trống; chọn Specify approver — Chỉ định người duyệt. Bấm ô tài khoản phía dưới và chọn người dự phòng được công ty quy định."
    result: "Mục dự phòng có tài khoản đúng của công ty, không để trống."
    image: "de-nghi-thanh-toan/fallback.webp"
    imageWidth: 510
    imageHeight: 183
    alt: "Ảnh Lark thật: Chọn người dự phòng khi thiếu tài khoản; khung đỏ và số chỉ vị trí thao tác"
    value: "When approver is empty: Specify approver\nTài khoản: người dự phòng do công ty quy định"
    caption: "Ảnh vị trí chọn người dự phòng; tài khoản mẫu đã che"
    note: "Chưa có người dự phòng cụ thể thì chưa đủ điều kiện đưa vào vận hành. Không dùng Auto-approve để bỏ qua một cấp bắt buộc. Đây là hướng dẫn cho bài Đề nghị thanh toán; không thay đổi cấu hình Auto-approve của mẫu một bước ở bài 02."
  - title: "Kiểm tra người gửi trùng người duyệt"
    action: "Đọc When the approver and requester are the same person — Khi người gửi và người duyệt là cùng người. Ghi lựa chọn được công ty chấp thuận cho từng cấp."
    result: "Trường hợp trùng người có quy tắc rõ ràng và không tự bỏ qua một cấp bắt buộc do chọn Auto-skip."
    image: "de-nghi-thanh-toan/self.webp"
    imageWidth: 510
    imageHeight: 101
    alt: "Ảnh Lark thật: Kiểm tra người gửi trùng người duyệt; khung đỏ và số chỉ vị trí thao tác"
    caption: "Ảnh mẫu đang chuyển cho trưởng phòng trong Lark Admin"
    note: "Mẫu gốc: Kế toán và KTT để người gửi tự duyệt; TGĐ, BKS và Chủ tịch chuyển cho Department supervisor. Đây chưa phải chính sách chung. Department supervisor là cơ cấu Lark Admin, không phải cột Trưởng bộ phận trong Base. Với yêu cầu BKS tất cả đồng ý, phải chốt trường hợp thành viên BKS tự gửi đơn và người thay thế trước khi sử dụng."
  - title: "Đặt điều kiện nhánh không quá 20 triệu"
    action: "Mở ô điều kiện nhánh thứ nhất. Chọn Số tiền đề nghị thanh toán; chọn less than or equal to — Nhỏ hơn hoặc bằng; nhập 20000000 và giữ VND-Dong. Đặt tên nhánh ≤ 20 triệu rồi bấm Confirm — Xác nhận."
    result: "Nhánh thứ nhất hiển thị điều kiện số tiền đề nghị ≤ 20.000.000 đồng."
    image: "de-nghi-thanh-toan/condition.webp"
    imageWidth: 499
    imageHeight: 767
    alt: "Ảnh Lark thật: Đặt điều kiện nhánh không quá 20 triệu; khung đỏ và số chỉ vị trí thao tác"
    value: "Số tiền đề nghị thanh toán\nless than or equal to\n20000000\nVND-Dong"
    caption: "Ảnh điều kiện 20 triệu trên bản thực hành, chưa Publish"
    note: "Mẫu gốc có ngưỡng khác. Bài này dùng ngưỡng đã được TYG xác nhận: trên 20 triệu phải lên Ban kiểm soát rồi Chủ tịch. Nếu công ty có nhiều nhóm điều kiện, phải đối chiếu toàn bộ; không chỉ sửa một con số rồi cho rằng đã đúng."
  - title: "Kiểm tra nhánh trên 20 triệu"
    action: "Xem Alternative branch — Nhánh còn lại. Khi chỉ có hai nhánh và nhánh đầu là ≤ 20 triệu, đặt các cấp cần thiết của công ty trước Ban kiểm soát, rồi đến Chủ tịch ở nhánh còn lại."
    result: "Đề nghị trên 20 triệu có đường đi qua Ban kiểm soát rồi Chủ tịch; nhánh ≤ 20 triệu không tự thêm hai cấp này theo quy tắc ngưỡng trên."
    image: "de-nghi-thanh-toan/process.webp"
    imageWidth: 511
    imageHeight: 646
    alt: "Ảnh Lark thật: Kiểm tra nhánh trên 20 triệu; khung đỏ và số chỉ vị trí thao tác"
    caption: "Ảnh sơ đồ thực hành; danh tính đã che"
    note: "Đúng 20.000.000 thuộc nhánh ≤ 20 triệu; 20.000.001 thuộc nhánh trên 20 triệu. Với luồng có thêm nhánh khác, không mặc định Alternative branch chỉ có số tiền > 20 triệu: cần kiểm tra thứ tự ưu tiên và điều kiện của tất cả nhánh."
  - title: "Yêu cầu tất cả thành viên Ban kiểm soát đồng ý"
    action: "Mở bước Ban kiểm soát. Kiểm tra Contact là Ban kiểm soát. Trong When there are multiple approvers — Khi có nhiều người duyệt, chọn Everyone assigned (all approvers need to agree)."
    result: "Tất cả tài khoản đã lấy từ cột Ban kiểm soát phải đồng ý ở bước này mới hoàn tất."
    image: "de-nghi-thanh-toan/everyone.webp"
    imageWidth: 510
    imageHeight: 139
    alt: "Ảnh Lark thật: Yêu cầu tất cả thành viên Ban kiểm soát đồng ý; khung đỏ và số chỉ vị trí thao tác"
    value: "Everyone assigned (all approvers need to agree)"
    caption: "Ảnh lựa chọn tất cả đồng ý trên bản thực hành"
    note: "Không chọn Anyone assigned — Chỉ cần một người. Everyone assigned chỉ yêu cầu tất cả tài khoản đã được đưa vào bước; vì vậy Base phải có đầy đủ thành viên BKS, không thiếu một người nào. Đây là một bước có nhiều thành viên, khác với Approvers review in sequential order — Duyệt lần lượt."
  - title: "Đặt Chủ tịch sau Ban kiểm soát"
    action: "Kiểm tra ô Chủ tịch nằm ngay sau Ban kiểm soát trên nhánh trên 20 triệu. Mở ô này và chọn Contacts in the form → Contact: Chủ tịch → Approval Type: Contact."
    result: "Chủ tịch nhận bước duyệt sau khi bước Ban kiểm soát hoàn tất theo quy tắc tất cả đồng ý."
    image: "de-nghi-thanh-toan/process.webp"
    imageWidth: 511
    imageHeight: 646
    alt: "Ảnh Lark thật: Đặt Chủ tịch sau Ban kiểm soát; khung đỏ và số chỉ vị trí thao tác"
    value: "Contact: Chủ tịch\nApproval Type: Contact"
    note: "Chọn tài khoản của Chủ tịch đúng công ty từ dòng nhân viên; không chọn chữ tên người ở cột Text. Kiểm tra cả người dự phòng và trường hợp trùng người gửi."
  - title: "Ngăn tự bỏ qua cấp khi một người giữ nhiều vai trò"
    action: "Mở More — Thiết lập khác. Tại Approver deduplication — Xử lý người duyệt xuất hiện nhiều lần, chọn Auto approval won’t apply. All steps need to be approved."
    result: "Một tài khoản có mặt ở nhiều cấp vẫn cần thực hiện từng bước; tránh tự thông qua bước BKS hoặc Chủ tịch do đã duyệt trước đó."
    image: "de-nghi-thanh-toan/dedup.webp"
    imageWidth: 837
    imageHeight: 184
    alt: "Ảnh Lark thật: Ngăn tự bỏ qua cấp khi một người giữ nhiều vai trò; khung đỏ và số chỉ vị trí thao tác"
    value: "Auto approval won't apply. All steps need to be approved."
    caption: "Ảnh mẫu trước thay đổi: khung đỏ chỉ lựa chọn cần chọn"
    note: "Đây là cách đề xuất để đáp ứng yêu cầu các cấp bắt buộc đều phải duyệt. Mẫu gốc đang chọn chỉ duyệt một lần rồi tự thông qua các bước sau. Đối chiếu với người phụ trách trước khi thay đổi cấu hình vận hành; không tự thay các thiết lập thu hồi, sửa đơn hoặc ủy quyền khác trong More."
  - title: "Kiểm tra người được gửi và người quản trị"
    action: "Trở lại Basic Info. Kiểm tra Who can submit this request — Ai được gửi và Process Administrator — Người quản trị quy trình ở phía dưới."
    result: "Phạm vi gửi và người quản trị đúng công ty, đúng người được giao trách nhiệm."
    image: "de-nghi-thanh-toan/scope.webp"
    imageWidth: 574
    imageHeight: 286
    alt: "Ảnh Lark thật: Kiểm tra người được gửi và người quản trị; khung đỏ và số chỉ vị trí thao tác"
    caption: "Ảnh bản thực hành đang kế thừa All từ mẫu"
    note: "All — Tất cả trong ảnh là giá trị mẫu, không phải lựa chọn bắt buộc. Ô Prohibit company administrators… đang bật trong mẫu: kiểm tra quyền quản lý thực tế với chủ quy trình. Đồng thời rà Form Permissions — Quyền xem trường và Operation Permissions — Quyền thao tác của từng bước; chỉ người có quyền được xem thông tin nhân viên, chứng từ và ngân hàng."
  - title: "Kiểm tra người nhận thông báo cuối quy trình"
    action: "Trong Process Design, bấm End — Kết thúc để đọc CC — Người nhận bản sao. Đối chiếu với người phụ trách thanh toán và quy định công ty."
    result: "CC đúng người cần biết kết quả, không còn tài khoản được sao chép từ công ty khác."
    image: "de-nghi-thanh-toan/end.webp"
    imageWidth: 532
    imageHeight: 220
    alt: "Ảnh Lark thật: Kiểm tra người nhận thông báo cuối quy trình; khung đỏ và số chỉ vị trí thao tác"
    caption: "Ảnh đầu bảng CC của mẫu hiện có"
    note: "CC chỉ nhận thông tin, không phải bước duyệt và không chứng minh đã chuyển tiền. Mẫu khảo sát chưa có bước xác nhận thanh toán riêng; nếu công ty cần bước xử lý chi tiền, phải thiết kế và chốt riêng."
  - title: "Xem trước và đối chiếu bảng kiểm"
    action: "Bấm Preview — Xem trước. Nếu Lark hiển thị QR, dùng ứng dụng Lark trên điện thoại để xem. Đối chiếu dữ liệu nhân viên, người duyệt và thông tin nhà cung cấp với bảng kiểm bên dưới."
    result: "Các trường lấy đúng cùng bản ghi. Những điểm chưa kiểm tra được được ghi lại, chưa kết luận quy trình chạy đúng."
    image: "de-nghi-thanh-toan/preview.webp"
    imageWidth: 191
    imageHeight: 58
    alt: "Ảnh Lark thật: Xem trước và đối chiếu bảng kiểm; khung đỏ và số chỉ vị trí thao tác"
    note: "Preview không tương đương gửi đơn và thực hiện duyệt. Khảo sát để viết bài này chưa gửi đơn thử. Chủ quy trình cần tổ chức kiểm thử có phép ở môi trường phù hợp trước khi chuyển sang sử dụng."
  - title: "Chỉ đưa thay đổi đã kiểm tra vào quy trình vận hành"
    action: "Sau khi người phụ trách chấp thuận và kiểm thử đạt, lên thời điểm áp dụng. Với công ty đã có Approval, quản trị viên áp dụng các thay đổi đã đối chiếu vào đúng biểu mẫu đang dùng rồi thực hiện Publish — Xuất bản."
    result: "Chỉ coi là hoàn tất khi Lark xác nhận thành công và đúng nhân viên nhìn thấy đúng biểu mẫu. Công ty vẫn có một đầu mối Đề nghị thanh toán rõ ràng."
    image: "de-nghi-thanh-toan/publish.webp"
    imageWidth: 191
    imageHeight: 58
    alt: "Ảnh Lark thật: Chỉ đưa thay đổi đã kiểm tra vào quy trình vận hành; khung đỏ và số chỉ vị trí thao tác"
    note: "Không Publish bản thực hành chỉ để chụp ảnh. Nếu công ty chọn thay bằng một Approval mới, phải chốt riêng cách chuyển sử dụng, đơn đang xử lý và thời điểm ngừng biểu mẫu cũ. Bài chưa xác minh ảnh hưởng của việc cập nhật đối với các đơn đã gửi; không mặc định đơn cũ đổi theo."
changes:
  - date: "2026-10-02"
    text: "Khảo sát biểu mẫu Đề nghị thanh toán; hướng dẫn hai trường hợp đã có/chưa có Approval, ánh xạ người duyệt sang Base theo từng công ty, nhánh trên 20 triệu, BKS tất cả đồng ý và người dự phòng. Ảnh mới chụp trên bản sao chưa Publish; ảnh bộ chọn Base tham chiếu bài 02."
faqs:
  - question: "Công ty đã có Đề nghị thanh toán chạy tốt, có phải tạo lại không?"
    answer: "Không. Ghi nhận quy trình hiện có, đối chiếu Base và chỉ cập nhật phần cần thay đổi sau khi thống nhất. Bản thực hành để học và kiểm tra; không biến nó thành biểu mẫu thứ hai đang vận hành cùng chức năng."
  - question: "Công ty không có bước Kế toán kiểm tra thì sao?"
    answer: "Ghi “Không dùng” trong bảng quy trình. Không thêm cấp đó, hoặc bỏ cấp tương ứng trên bản thực hành sau khi xác nhận. Không để ô người duyệt trống rồi dùng Auto-approve để bỏ qua. Các cấp phía trước BKS do mỗi công ty chốt."
  - question: "Thêm cột người duyệt vào Base có tự tạo luồng không?"
    answer: "Không. Cột phải có kiểu Person, chứa tài khoản đúng; phải thêm vào Reference field, rồi chọn cột đó ở Contact của từng bước duyệt. Cả ba việc đều cần thực hiện."
  - question: "Tại sao không chọn Person làm người duyệt cho tất cả cấp?"
    answer: "Person là tài khoản của nhân viên trên dòng dữ liệu. Các cấp phải chọn cột tương ứng: Kế Toán Trường, Tổng Giám Đốc, Ban kiểm soát hoặc Chủ tịch. Chọn Person ở mọi cấp có thể khiến người gửi tự duyệt toàn bộ."
  - question: "Không thấy Base hoặc nhận No permissions?"
    answer: "Kiểm tra công ty đang đăng nhập, quyền quản trị Approval và quyền quản lý Base. Base thực hành khác công ty có thể không kết nối được. Không mở rộng quyền hoặc lấy Base công ty khác làm phương án thay thế khi chưa được phép."
  - question: "Đúng 20 triệu có lên Ban kiểm soát không?"
    answer: "Theo ngưỡng đã xác nhận trong bài này: đúng 20.000.000 đồng thuộc nhánh ≤ 20 triệu; trên 20.000.000 đồng phải qua Ban kiểm soát rồi Chủ tịch. Các cấp còn lại vẫn theo quy định công ty."
  - question: "BKS có ba người nhưng chỉ hai người nhận duyệt?"
    answer: "Everyone assigned chỉ áp dụng với danh sách tài khoản thực sự đưa vào bước. Kiểm tra cột Ban kiểm soát trên đúng dòng nhân viên có đủ ba tài khoản; bật cho phép nhiều thành viên và kiểm tra nguồn Contact của bước BKS. Không coi thiếu thành viên là hợp lệ chỉ vì hệ thống có người duyệt."
  - question: "Đã quy định người dự phòng rồi, có được bỏ trống Base không?"
    answer: "Người dự phòng là cách xử lý khi không tìm được người duyệt, không thay thế việc chuẩn bị Base đầy đủ. Ghi tài khoản dự phòng cụ thể cho từng cấp và chọn tài khoản đó trong When approver is empty. Chưa chỉ định xong thì chưa Publish để vận hành."
  - question: "Tất cả BKS đồng ý có bảo đảm từng cấp đều được duyệt không?"
    answer: "Cần kiểm tra thêm Approver deduplication và trường hợp người gửi trùng người duyệt. Nếu một tài khoản đã duyệt ở cấp trước, lựa chọn tự thông qua các bước sau có thể bỏ qua bước tiếp theo. Cách đề xuất trong bài là yêu cầu mọi bước phải được duyệt; trường hợp BKS tự gửi đơn cần chủ quy trình chốt riêng."
  - question: "Bài này đã chứng minh quy trình chạy thực tế chưa?"
    answer: "Chưa. Biểu mẫu gốc được khảo sát chỉ đọc; ảnh ngưỡng và BKS chụp trên bản sao chưa Publish. Chưa gửi đơn thử, chưa xác minh thông báo hay hành vi của đơn đang chạy khi cập nhật. Kết nối Base và bộ chọn Contact được minh họa bằng ảnh bài 02; chưa kiểm thử toàn bộ luồng thanh toán lấy từ Base."
sources:
  - title: "Tham chiếu dữ liệu từ Base (tiếng Anh)"
    url: "https://www.larksuite.com/hc/en-US/articles/258688173288-admin-reference-data-from-base"
  - title: "Thiết lập bước người duyệt (tiếng Anh)"
    url: "https://www.larksuite.com/hc/en-US/articles/360041315273"
  - title: "Dùng người liên hệ trong biểu mẫu làm người duyệt (tiếng Anh)"
    url: "https://www.larksuite.com/hc/en-US/articles/698238328326"
  - title: "Thiết lập nhánh điều kiện (tiếng Anh)"
    url: "https://www.larksuite.com/hc/en-US/articles/360045140014"
---

**Bạn đã có Đề nghị thanh toán đang chạy?** Hãy giữ quy trình đó làm điểm xuất phát. Xem [bước 1](#buoc-1), ghi lại người duyệt và các điều kiện; thực hành riêng khi được phép. Nếu biểu mẫu đủ trường, bỏ qua phần đối chiếu 5–18 và đến [kết nối Base nhân viên ở bước 19](#buoc-19). Chỉ sửa phần cần thay đổi.

**Công ty chưa có biểu mẫu?** Dùng mẫu tham khảo được người phụ trách chỉ định, làm từ đầu bài và chọn các cấp theo quy định công ty. Một mẫu tham khảo không phải một luồng bắt buộc giống nhau cho mọi công ty.

### Chốt bảng quy trình trước khi bấm trên Lark

Người phụ trách của mỗi công ty điền bảng này trước. Ảnh mẫu có Kế toán kiểm tra → KTT → TGĐ; đó là thứ tự của mẫu được khảo sát, chưa phải quy định áp dụng cho mọi công ty.

| Cấp | Công ty có dùng? | Thứ tự / điều kiện | Cột Base lấy tài khoản | Người dự phòng |
| --- | --- | --- | --- | --- |
| Trưởng bộ phận | Công ty xác nhận | Công ty xác nhận | Trưởng bộ phận | Công ty chỉ định |
| Kế toán kiểm tra | Có / Không | Công ty xác nhận | Kế toán kiểm tra | Công ty chỉ định |
| Kế Toán Trường | Công ty xác nhận | Công ty xác nhận | Kế Toán Trường | Công ty chỉ định |
| Tổng Giám Đốc | Công ty xác nhận | Công ty xác nhận | Tổng Giám Đốc | Công ty chỉ định |
| Ban kiểm soát | Bắt buộc khi trên 20 triệu | Trước Chủ tịch; tất cả thành viên đồng ý | Ban kiểm soát | Công ty chỉ định |
| Chủ tịch | Bắt buộc khi trên 20 triệu | Sau Ban kiểm soát | Chủ tịch | Công ty chỉ định |

**Ví dụ minh họa, không phải chính sách mới:** Công ty A cần Kế toán kiểm tra trước Kế Toán Trường; công ty B không có cấp Kế toán kiểm tra. Hai công ty dùng phần thông tin thanh toán tương tự, nhưng giữ sơ đồ riêng theo quy định đã xác nhận. Cả hai vẫn cần đối chiếu yêu cầu trên 20 triệu → Ban kiểm soát → Chủ tịch.

### Chuẩn bị Base và quyền

Làm [bài 01 — Base nhân viên](/TYG_Lark_book/approval/thiet-lap-base/) trước. Trên **mỗi dòng nhân viên**, chọn tài khoản của các người phụ trách đúng công ty. **Ban kiểm soát** phải có đủ thành viên và cho phép nhiều tài khoản. Nếu công ty dùng **Kế toán kiểm tra**, thêm cột tên này, chọn kiểu **Person** và chọn một tài khoản như thao tác tạo cột Person trong bài 01. Đây là cột bổ sung theo quy trình, không bắt mọi công ty thêm một cấp mới.

Họ Tên là chữ; Person là tài khoản của nhân viên. Các cột cấp trên cũng là **Person**, phải bấm chọn tài khoản thật trong kết quả tìm kiếm. Gõ chữ tên người vào ô Text không đủ để nhận phê duyệt. Người thiết lập cần quyền quản trị Approval và quyền quản lý Base phù hợp. Xem [bài 02 — Kết nối Base](/TYG_Lark_book/approval/ket-noi-base/) nếu chưa quen bộ chọn Base, Table và Reference field.

**Hai nhóm dữ liệu khác nhau:** Base nhân viên lấy người duyệt. Base nhà cung cấp lấy mã số thuế, tên người nhận, tài khoản và ngân hàng. Chọn đúng từng nhóm, đúng công ty; không dùng một nhóm thay cho nhóm kia.

### Quy tắc đã được TYG xác nhận cho bài này

| Số tiền đề nghị thanh toán | Phần cuối luồng duyệt |
| --- | --- |
| ≤ 20.000.000 đồng | Các cấp theo quy định công ty |
| > 20.000.000 đồng | Các cấp theo quy định công ty → **Ban kiểm soát: tất cả đồng ý** → **Chủ tịch** |

Người dự phòng do công ty quy định. Các trường hợp người gửi tự là người duyệt, một người giữ nhiều chức danh và quyền xem dữ liệu phải được đối chiếu riêng. Không lấy lựa chọn trong ảnh mẫu làm chính sách chung.

### Bảng kiểm trước khi đưa vào sử dụng

| Trường hợp cần kiểm tra | Kết quả phải đối chiếu |
| --- | --- |
| Nhân viên X chọn dòng của mình | Person là X; các cấp trên lấy từ cùng dòng X |
| Hai nhân viên có cấp trên khác nhau | Mỗi đơn chọn đúng dòng và lấy đúng người, không dùng tài khoản cố định của mẫu |
| 19.999.999 và 20.000.000 đồng | Đi nhánh ≤ 20 triệu |
| 20.000.001 đồng | Có BKS rồi Chủ tịch |
| BKS có nhiều thành viên | Tất cả tài khoản có đủ; một người đồng ý chưa hoàn tất bước |
| Một người xuất hiện ở nhiều cấp | Không tự bỏ qua cấp bắt buộc vì đã duyệt trước đó |
| Cột người duyệt bị trống | Lấy đúng người dự phòng đã chỉ định; không tự thông qua |
| Người gửi là thành viên BKS / Chủ tịch | Xử lý đúng quy tắc công ty đã chốt; không bỏ qua cấp bắt buộc |
| Nhân viên có quyền hạn thông thường | Chỉ xem và chọn đúng dữ liệu được phép; không chỉ kiểm tra bằng tài khoản admin |
| Nhà cung cấp được chọn | Mã số thuế, tên và ngân hàng đều từ cùng bản ghi, đúng thông tin đã xác nhận |
| Biểu mẫu đang vận hành được cập nhật | Có kế hoạch áp dụng; theo dõi đơn đang xử lý và hướng dẫn nhân viên dùng đúng biểu mẫu |

Ảnh cấu hình biểu mẫu gốc được khảo sát **chỉ đọc ngày 01/10/2026**. Ảnh ngưỡng 20 triệu và “tất cả đồng ý” chụp trên **bản sao thực hành chưa Publish**. Ảnh bộ chọn Base và Contact minh họa từ bài 02; không mô tả chúng là bằng chứng toàn bộ luồng thanh toán đã kết nối hoặc chạy thử. Danh tính, tên Base nội bộ và tài khoản đã che trước khi đưa lên website.
