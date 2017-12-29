
- [ ] tên app trắc nghiệm
- [ ] ***dup tag***
- [x] api clap post
- [ ] ***show list clap***
- [x] api bookmark post
- [x] show list bookmark
- [ ] ***post detail***
- [x] get post detail (show) 50%
- [ ] tag
- [ ] show posts by tag
- [ ] category
- [ ] show posts by category
- [ ] add post
- [ ] share on facebook
- [ ] setting page
- [ ] List mypost
- [ ] Comment
- [ ] token
- [ ] ***auth***
- [ ] Token
- [ ] Brand
- [ ] Logo



- Các thắc mắc về app trắc nghiệm:
- Đối tượng sử dụng app.
- Các môn sẽ dùng trắc nghiệm. (tại sao focus vô môn Toán mà k phải các môn khác)
- Mô tả chi tiết hơn về app. (hiện tại em đang quá mơ hồ).
- Chi phí đầu tư.
- Thời gian dự tính sẽ hoàn thành.

- Mô tả về ứng dụng này: Ứng dụng trắc nghiệm
- User sẽ có option chọn bộ đề theo môn, độ khó, thời gian... Từ filter này mình sẽ random các câu hỏi từ ngân hàng câu hỏi mình có -> n câu hỏi cho user
- 1 câu hỏi trắc nghiệm sẽ bao gồm:
  + Nội dung câu hỏi (text, audio, video ...)
  + Các câu trả lời (ít nhất 2).
  + 1 câu có thể có 1 hoặc nhiều đáp án.
  + Lời giải thích (k bắt buộc, dạng text).
  + 1 câu hỏi thuộc 1 môn học, có 1 độ khó, có thể có nhiều tag (tag ví dụ như: toán cấp 3, kiến thức tổng hợp, đề học sinh giỏi cấp tỉnh...)
- Câu hỏi chưa giải được có thể bỏ qua trả lời sau. Trường hợp câu hỏi đã trả lời (đã check chọn), có thể quay lại sửa đáp án.
- Sau khi hoàn thành, hệ thống sẽ chấm điểm -> đưa kết quả về cho người dùng.
- Vì là ứng dụng client - server nên sẽ quản lý thời gian giữa 2 nơi client và server. (Tránh trường hợp user trick).
- Điểm xếp hạng user dựa theo: level + thời gian.

