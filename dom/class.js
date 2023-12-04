// 1. selector.classList.add("className")
const container = document.querySelector(".container");
container.classList.add("is-active"); // thêm class active vào selector

// 2. selector.classList.remove("className")
// container.classList.remove("is-active"); // xóa class active khỏi selector

// 3.selector.classList.contains("className")
// console.log(!container.classList.contains("is-active"));

// 4. selector.classList.toggle("className"): có rồi thì xóa, chưa có thì thêm vào
// container.classList.toggle("is-active"); // thêm class active vào selector

// bản chất
if (container.classList.contains("is-active")) {
    container.classList.remove("is-active");
}
else {
    container.classList.add("is-active", "accent");
}

// 5. selector.className --> trả ra chuỗi các class của selector
// --> rồi xử lý gì đó ví dụ split, replace,...
const title = document.querySelector(".title");
console.log(title.className);
title.className = "title";
console.log(title.className);