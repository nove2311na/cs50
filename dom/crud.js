// Tạo ra các element trong JS rồi dùng các method set prop, attr, ..., nội dung để thêm vào DOM các node đó (bằng cách gọi các biêt đại diện cho module --> dùng .prop hoặc .method)

// 1. Tạo ra element trong JS
// const divElement = document.createElement('div');
// const h1Element = document.createElement('h1');


// 2. Thêm element vào trong DOM
// document.body.appendChild(h1Element);
// document.body.appendChild(divElement);
// const body = document.body;
// body.appendChild(divElement);

// 3. Thêm nội dung cho element
// h1Element.textContent = 'Hello World';
// divElement.innerHTML = '<div class="content">Hi mọi người</div>';
// divElement.setAttribute('class', 'content');

// Bài tập
// gán node body vào biến body
const body = document.body;

// // tạo biến card
// const card = document.createElement('div');

// // set thuộc tính, định danh, nội dung cho card
// card.classList.add('card');
// card.innerHTML = '<h1>card</h1>';
// card.style.width = '300px';

// // appendChild card vào body
// body.appendChild(card);

// // tạo biến cardImage
// const cardImage = document.createElement('img');

// // set thuộc tính, định danh, nội dung cho cardImage
// cardImage.classList.add('card-image');
// cardImage.setAttribute('src', 'https://source.unsplash.com/random/300x300');

// // appendChild cardImage vào card
// card.appendChild(cardImage);

// 4. document.createTextNode
const text = document.createTextNode('Hello World');
const h1 = document.createElement('h1');
body.appendChild(h1);
h1.appendChild(text);

// tạo element --> tạo textnode --> đưa textnode vào element --> hiển thị theo element nhưng text content của textnode

// 5. cloneNode
// const textClone = text.cloneNode();
const h1Clone = h1.cloneNode(true);
// h1Clone.appendChild(textClone);
body.appendChild(h1Clone);

// 6. hasChildNodes: check điều kiện
console.log(h1.hasChildNodes());
