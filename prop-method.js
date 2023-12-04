const listItemSelector = document.querySelector('.item');
console.log(listItemSelector.getAttribute("class"));


// selector.getAttribute("class") --> chỉ 1 phần tử --> nhiều phần tử cần dùng vòng lặp để console.log

const listItemsSelectorAll = document.querySelectorAll(`.item`);
listItemsSelectorAll.forEach(item => {
    console.log(item.getAttribute("class"));
});

