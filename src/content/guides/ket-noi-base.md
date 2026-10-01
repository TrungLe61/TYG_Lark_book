---
title: "Kết nối Base nhân viên với Approval"
shortTitle: "Kết nối Base với Approval"
description: "Lấy dữ liệu từ bảng nhân viên và thiết lập một bước duyệt theo trường Person."
order: 1
updated: "2026-10-01"
verified: "2026-10-01"
keywords: ["phê duyệt", "approval", "base", "nhân viên", "người duyệt", "Person", "Data from Base", "All data", "Auto-approve", "tự duyệt", "kết nối", "quyền", "Publish", "Preview"]
steps:
  - title: "Mở Form Design — Thiết kế biểu mẫu"
    action: "Trong biểu mẫu Approval của bạn, bấm Form Design ở thanh trên cùng."
    result: "Bên trái có các ô công cụ; ở giữa là hình biểu mẫu trên điện thoại."
    image: "ket-noi-base/form-design.webp"
    imageWidth: 1150
    imageHeight: 795
    alt: "Khung đỏ số 1 ở tab Form Design trên thanh đầu trang Lark Approval"
    note: "Hãy mở biểu mẫu thực hành của bạn. Đừng chỉnh biểu mẫu đang vận hành khi chưa thống nhất thay đổi."
  - title: "Thêm Data from Base — Dữ liệu từ Base"
    action: "Trong nhóm Other — Công cụ khác ở bên trái, bấm Data from Base để thêm vào biểu mẫu."
    result: "Có một nhóm dữ liệu từ Base trong biểu mẫu. Bấm nhóm này để thấy bảng cấu hình bên phải."
    image: "ket-noi-base/widget.webp"
    imageWidth: 955
    imageHeight: 310
    alt: "Khung đỏ số 1 bao quanh công cụ Data from Base ở bên trái"
    note: "Nếu nhóm đã có như ảnh mẫu, chỉ bấm vào nhóm ở giữa; không thêm lần nữa."
  - title: "Chọn Base nhân viên của công ty"
    action: "Trong Select a base — Chọn Base (khung số 1), bấm mũi tên rồi chọn Base nhân viên. Có thể dán đường dẫn Base trong ô chọn."
    result: "Ô Select a base hiển thị tên Base của công ty bạn."
    image: "ket-noi-base/chon-base.webp"
    imageWidth: 1052
    imageHeight: 690
    alt: "Khung đỏ 1 đánh dấu Select a base, khung 2 đánh dấu Select a table; tên nội bộ được che"
    note: "Tên Base trong ảnh đã che. Nếu không tìm thấy Base, kiểm tra quyền quản lý Base và công ty đang đăng nhập."
  - title: "Chọn đúng bảng bên trong Base"
    action: "Bấm Select a table — Chọn bảng, rồi chọn bảng chứa danh sách nhân viên."
    value: "Table (tên bảng trong mẫu)"
    result: "Ô Select a table hiển thị bảng đã chọn."
    image: "ket-noi-base/chon-bang.webp"
    imageWidth: 350
    imageHeight: 208
    alt: "Khung đỏ số 1 bao quanh ô Select a table có giá trị Table"
    note: "Base là cả tệp dữ liệu. Table là một bảng bên trong tệp đó. Tên bảng của công ty bạn có thể khác."
  - title: "Chọn trường Person để lấy tài khoản Lark"
    action: "Trong Reference field — Trường tham chiếu, bấm Add — Thêm (khung số 2) và chọn Person."
    value: "Person"
    result: "Danh sách Reference field có dòng Person với biểu tượng hình người (khung số 1)."
    image: "ket-noi-base/reference-field.webp"
    imageWidth: 350
    imageHeight: 320
    alt: "Khung đỏ 1 đánh dấu Person với biểu tượng người; khung 2 đánh dấu Add"
    note: "Person phải là cột kiểu Person trong Base. Cột Họ Tên kiểu Text chỉ chứa chữ, không đại diện cho tài khoản Lark để duyệt."
  - title: "Thêm các trường còn lại của mẫu"
    action: "Tiếp tục bấm Add để chọn từng trường cần đưa vào biểu mẫu."
    value: "Chức vụ\nPhòng ban\nTrưởng bộ phận\nktt\nTổng Giám Đốc"
    result: "Danh sách có sáu trường như ảnh. Các trường xuất hiện cùng nhóm trong biểu mẫu."
    image: "ket-noi-base/reference-fields.webp"
    imageWidth: 350
    imageHeight: 320
    alt: "Danh sách trường tham chiếu trong mẫu gồm Person, Chức vụ, Phòng ban, Trưởng bộ phận, ktt và Tổng Giám Đốc"
    note: "ktt là tên cột trong mẫu. Những cột này chưa tự trở thành các cấp duyệt. Việc chọn người duyệt được làm ở Process Design."
  - title: "Hiểu phạm vi All data — Tất cả dữ liệu"
    action: "Đọc mục Submitter can select data from — Người gửi có thể chọn dữ liệu từ. Để làm theo cấu hình mẫu, chọn All data."
    value: "All data"
    result: "Dấu tròn bên cạnh All data được tô xanh như ảnh."
    image: "ket-noi-base/all-data.webp"
    imageWidth: 350
    imageHeight: 118
    alt: "Khung đỏ số 1 ở lựa chọn All data đang được chọn"
    note: "Đây là phạm vi dữ liệu người gửi được chọn trong công cụ. Quyền nâng cao của Base vẫn áp dụng theo tài liệu Lark. Không hiểu All data là cấp quyền công khai Base, cũng không mặc định chỉ hiện dòng của chính người gửi."
  - title: "Mở Process Design — Thiết kế luồng duyệt"
    action: "Bấm Process Design ở thanh trên cùng."
    result: "Bạn thấy sơ đồ Submit — Gửi đơn, Approval — Duyệt, End — Kết thúc."
    image: "ket-noi-base/process-design.webp"
    imageWidth: 580
    imageHeight: 750
    alt: "Khung đỏ số 1 trên tab Process Design; phía dưới là luồng một bước Approval"
  - title: "Mở bước Approval — Phê duyệt"
    action: "Bấm ô Approval màu cam giữa sơ đồ."
    result: "Bảng cấu hình Approval mở ở bên phải."
    image: "ket-noi-base/approval-node.webp"
    imageWidth: 310
    imageHeight: 480
    alt: "Khung đỏ số 1 bao quanh bước Approval màu cam trong sơ đồ"
    note: "Mẫu đã có một bước duyệt. Trong biểu mẫu mới, dùng dấu + giữa Submit và End để thêm bước Approval nếu chưa có."
  - title: "Lấy người duyệt từ biểu mẫu"
    action: "Trong Set Approvers — Thiết lập người duyệt, chọn Contacts in the form — Người liên hệ trong biểu mẫu. Giữ Manual approval — Duyệt thủ công ở đầu bảng."
    value: "Contacts in the form"
    result: "Dấu tròn ở Contacts in the form được tô xanh, bên dưới có ô Contact."
    image: "ket-noi-base/contacts-in-form.webp"
    imageWidth: 530
    imageHeight: 688
    alt: "Khung đỏ số 1 đánh dấu Contacts in the form, Manual approval được chọn phía trên"
  - title: "Chỉ định trường Person"
    action: "Trong ô Contact — Người liên hệ (khung số 1), chọn Person. Trong Approval Type — Cách lấy người duyệt, chọn Contact — Chính người đó (khung số 2)."
    value: "Contact: Person\nApproval Type: Contact"
    result: "Người nằm trong trường Person của bản ghi được chọn sẽ là người duyệt của bước này."
    image: "ket-noi-base/person.webp"
    imageWidth: 530
    imageHeight: 302
    alt: "Khung đỏ 1 ở ô Contact chứa Person; khung đỏ 2 ở lựa chọn Contact"
    note: "Person trong mẫu là tài khoản của nhân viên trong bản ghi Base. Chọn bản ghi của ai thì bước duyệt lấy tài khoản đó; không tự chuyển sang Trưởng bộ phận."
  - title: "Kiểm tra khi có nhiều người trong Person"
    action: "Cuộn bảng cấu hình xuống. Ở When there are multiple approvers — Khi có nhiều người duyệt, chọn Everyone assigned theo mẫu."
    value: "Everyone assigned (all approvers need to agree)"
    result: "Nếu trường Person có nhiều người, tất cả những người đó phải đồng ý."
    image: "ket-noi-base/everyone.webp"
    imageWidth: 530
    imageHeight: 140
    alt: "Khung đỏ số 1 ở Everyone assigned, tất cả người duyệt cần đồng ý"
    note: "Đây vẫn là một bước duyệt, chưa phải luồng duyệt nhiều cấp."
  - title: "Kiểm tra khi thiếu người duyệt"
    action: "Đọc mục When approver is empty — Khi người duyệt trống. Mẫu đang chọn Auto-approve — Tự thông qua."
    value: "Auto-approve"
    result: "Nếu bước này không xác định được người duyệt, bước được tự thông qua theo cấu hình đó."
    image: "ket-noi-base/empty.webp"
    imageWidth: 530
    imageHeight: 102
    alt: "Khung đỏ số 1 ở Auto-approve dưới mục When approver is empty"
    note: "Đây là cấu hình của mẫu, không phải quy định chung cho mọi công ty. Cần thống nhất cách xử lý thiếu người duyệt trước khi áp dụng vào quy trình thật."
  - title: "Kiểm tra khi người gửi cũng là người duyệt"
    action: "Đọc mục When the approver and requester are the same person — Khi người duyệt và người gửi trùng nhau. Mẫu đang chọn Requester reviews the request."
    value: "Requester reviews the request"
    result: "Người gửi vẫn phải thực hiện việc duyệt; bước không tự bỏ qua chỉ vì trùng người."
    image: "ket-noi-base/self.webp"
    imageWidth: 530
    imageHeight: 121
    alt: "Khung đỏ số 1 ở Requester reviews the request, người gửi tự thực hiện duyệt khi trùng người"
    note: "Nếu bạn vừa gửi đơn vừa chọn bản ghi Person của mình, trường hợp này có thể xảy ra. Trong biểu mẫu thực hành mới của bạn, bấm Save — Lưu ở bảng cấu hình sau khi kiểm tra xong."
  - title: "Xem trước để kiểm tra cách chọn nhân viên"
    action: "Bấm Preview — Xem trước ở góc trên bên phải. Trong màn hình hiện tại, Lark hiển thị mã QR; dùng ứng dụng Lark trên điện thoại để quét và xem trước."
    result: "Bạn mở được bản xem trước. Khi chọn một bản ghi ở trường đầu của nhóm Base, các trường liên quan được điền từ cùng bản ghi đó."
    image: "ket-noi-base/preview.webp"
    imageWidth: 490
    imageHeight: 67
    alt: "Khung đỏ số 1 đánh dấu nút Preview trên thanh đầu trang"
    note: "Kiểm tra Person và các trường đi kèm có đúng cùng một dòng nhân viên không. Hướng dẫn này chưa gửi đơn thử, nên chưa xác nhận thông báo hoặc kết quả duyệt thực tế."
  - title: "Chỉ Publish sau khi kiểm tra đầy đủ"
    action: "Sau khi người phụ trách đã xác nhận đúng Base, đúng phạm vi người gửi và đúng quy tắc duyệt, bấm Publish — Xuất bản trong biểu mẫu của công ty bạn."
    result: "Lark xử lý việc xuất bản. Chỉ xem là hoàn tất khi hệ thống xác nhận thành công và người thuộc phạm vi gửi nhìn thấy biểu mẫu."
    image: "ket-noi-base/publish.webp"
    imageWidth: 490
    imageHeight: 67
    alt: "Khung đỏ số 1 đánh dấu nút Publish; đây là vị trí nút, chưa phải ảnh xác nhận xuất bản"
    note: "Chúng tôi chỉ chụp vị trí nút, chưa bấm Publish trong quá trình khảo sát mẫu. Các bước xác nhận sau khi bấm có thể khác theo tài khoản và phiên bản Lark."
faqs:
  - question: "Tôi không thấy Base trong Select a base?"
    answer: "Kiểm tra bạn đang đăng nhập đúng công ty và có quyền quản lý Base đó. Nếu chưa có, nhờ người quản lý Base kiểm tra quyền. Có thể dán đường dẫn Base trong ô chọn. Không cần đổi quyền Base sang công khai."
  - question: "Có Họ Tên nhưng không chọn được người duyệt?"
    answer: "Kiểm tra loại cột. Họ Tên kiểu Text chỉ là chữ; cần cột Person chứa tài khoản Lark. Sau đó tham chiếu cột Person trong Data from Base và chọn cột đó ở Contact của bước duyệt."
  - question: "Thêm Trưởng bộ phận vào Base có tự tạo thêm cấp duyệt không?"
    answer: "Không. Trong mẫu đã kiểm tra, chỉ trường Person được dùng ở một bước Approval. Các cấp khác cần được thiết lập riêng trong Process Design, theo thứ tự và điều kiện đã thống nhất của công ty."
  - question: "Tôi chọn nhầm dòng nhân viên thì sao?"
    answer: "Đối chiếu Person, chức vụ và phòng ban trước khi gửi. Nhóm dữ liệu lấy từ bản ghi được chọn, không mặc định được khóa theo chính người gửi trong cấu hình mẫu này."
  - question: "Base thay đổi rồi, vì sao đơn cũ không thay đổi?"
    answer: "Theo tài liệu Lark, đơn đã gửi giữ dữ liệu tại thời điểm gửi. Thay đổi Base không đồng bộ lại dữ liệu trong các đơn đã gửi."
  - question: "Tôi là admin nên thấy hết; nhân viên có thấy giống tôi không?"
    answer: "Không thể suy ra từ màn hình admin. Cần kiểm tra với tài khoản nhân viên thuộc đúng phạm vi gửi và quyền Base được cấp, đặc biệt nếu bật quyền nâng cao."
  - question: "Bản hướng dẫn này đã chạy thử quy trình thật chưa?"
    answer: "Chưa. Cấu hình và nút được khảo sát trong giao diện thật ngày 01/10/2026. Chưa Publish, chưa gửi đơn thử và chưa xác nhận thông báo tới người duyệt."
changes:
  - date: "2026-10-01"
    text: "Bài mẫu đầu tiên: kết nối Base, một bước duyệt theo Person, ảnh thật đã che thông tin và đánh dấu vị trí thao tác."
sources:
  - title: "Tham chiếu dữ liệu từ Base (tiếng Anh)"
    url: "https://www.larksuite.com/hc/en-US/articles/258688173288-admin-reference-data-from-base"
  - title: "Thiết lập bước người duyệt (tiếng Anh)"
    url: "https://www.larksuite.com/hc/en-US/articles/360041315273"
  - title: "Dùng người liên hệ trong biểu mẫu làm người duyệt (tiếng Anh)"
    url: "https://www.larksuite.com/hc/en-US/articles/698238328326"
---

**Trước khi bắt đầu:** Bạn cần một Base nhân viên có cột **Person** chứa tài khoản Lark và một biểu mẫu Approval thực hành. Người thiết lập cần quyền quản trị Approval và quyền quản lý Base.

**Bạn sẽ làm được:** nối bảng nhân viên vào biểu mẫu và lấy người duyệt từ **Person** của bản ghi được chọn.

> **Hiểu đúng mẫu:** Đây là luồng một bước duyệt theo Person. Thêm các cột Trưởng bộ phận, ktt, Tổng Giám Đốc vào biểu mẫu chưa tạo thêm các cấp duyệt.

Ảnh mô tả cấu hình mẫu đã kiểm tra ngày **01/10/2026**. Mỗi ảnh được cắt gần vị trí thao tác; tên nội bộ đã che. Cấu hình hiển thị trong ảnh là cấu hình mẫu, cần đối chiếu quy định công ty trước khi áp dụng.
