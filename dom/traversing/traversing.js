// 1. parentNode, parentElement, childNodes, children, removeChild, remove

// yêu cầu trình duyệt trả về thẻ body từ DOM
const body = document.body;
// yêu cầu trả về thẻ h3 đầu tiên từ thẻ body
const h3 = body.querySelector('h3');
// yêu cầu trả về thẻ span đầu tiên từ thẻ h3
const span = h3.querySelector('span');
// xóa span khỏi h3
// h3.removeChild(span);
// span.parentNode.removeChild(span);

// 2. nextSibling, previousSibling, nextElementSibling, previousElementSibling
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousSpan = span.previousElementSibling;
console.log(previousSpan);

// 3. childNodes: trả về hết gồm cả TextNode, children: chỉ trả về ElementNode
const childNodes = span.childNodes;
console.log(childNodes);
const children = span.children;
console.log(children);

// 4. firstChild: lấy cả TextNode, lastChild, firstElementChild: chỉ lấy ElementChild, lastElementChild

// * cơ bản là lấy ra các phần tử trước, sau, con, con đầu, con cuối, con thứ n,.. và sẽ có sự khác nhau ở việc lấy hết (cả TextNode và ElementNode) hay chỉ lấy ElementNode