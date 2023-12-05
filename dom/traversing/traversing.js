// 1. parentNode, parentElement, childNodes, children, removeChild, remove

// yêu cầu trình duyệt trả về thẻ body từ DOM
const body = document.body;
// yêu cầu trả về thẻ h3 đầu tiên từ thẻ body
const h3 = body.querySelector('h3');
// yêu cầu trả về thẻ span đầu tiên từ thẻ h3
const span = h3.querySelector('span');
// xóa span khỏi h3
h3.removeChild(span);
// span.parentNode.removeChild(span);

// nextSibling, previousSibling, nextElementSibling, previousElementSibling