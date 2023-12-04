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

// Khởi tạo card
const card = document.createElement('div');

// Set attribute cho card
card.classList.add('card');
card.innerHTML = '<h1>card</h1>';

// Xuất bản card
document.body.appendChild(card);

// Khởi tạo cardImage
const cardImage = document.createElement('img');

// Set attribute cho cardImage
cardImage.setAttribute('src', 'https://source.unsplash.com/random/300x300');
cardImage.setAttribute('alt', 'random image');
cardImage.classList.add('card-image');

// Xuất bản cardImage
card.appendChild(cardImage);