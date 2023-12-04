// 1. textContent: lấy ra nội dung (only text) bao gồm text trong html tag (nếu có) của selector được select
const spinner = document.querySelectorAll("#spinner");
// gán nội dung mới:

// spinner.forEach(item => {
//     item.textContent = "Loading...";
// });

spinner.forEach(item => {
    console.log(item.textContent);
});
console.log(spinner);

//textContent: được sử dụng nhiều hơn innerText
// * Lưu ý: dùng khi muốn thay đổi nội dung của selector không bao gồm html tag

// 2. innerText:

const spinner2 = document.querySelector("#spinner");
spinner.forEach(item => {
    console.log(spinner2.innerText);
});
console.log(spinner2);

// 3. innerHTML: 
const spinner3 = document.querySelector("#spinner");
console.log(spinner3.innerHTML); 
spinner3.innerHTML = "<h1> Loading... </h1>";
// * Lưu ý: dùng khi muốn thay đổi nội dung của selector bao gồm cả html tag