// Gọi node body
const body = document.body;

// Tạo function tạo notification
function createNotification(title = "Welcome to notification") {
    const template =  
    `<div id="notification">
        <img src="https://source.unsplash.com/random" alt="image" class="notification-image">
        <div class="notification-content">
            <h3 class="notification-title">${title}</h3>
            <p class="notification-desc">Lorem ipsum dolor sit ametconsectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
    </div>`;
    // insertAdjacentHTML('afterbegin', template)
    if (template) {
        body.insertAdjacentHTML('afterbegin', template);
    }
}

// Tệp random data
const randomData = ["string 1", "string 2", "string 3", "string 4", "string 5", "string 6", "string 7", "string 8", "string 9", "string 10"];

// Khai báo biến lưu trữ title
let lastTittle;

// Tạo interval để tạo ra notification
setInterval(function () {
    const item = document.querySelector('#notification');
    // Nếu item tồn tại thì xóa đi
    if (item) {
        item.parentNode.removeChild(item);
    };
    // Tạo random title
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    // Nếu title khác với lastTitle thì tạo notification mới
    if (title !== lastTittle) {
        createNotification(title);
    }
    // Lưu lại title
    lastTittle = title;
}, 5000);
