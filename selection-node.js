const h1 = document.querySelector('h1');
console.log(h1);

const multiItems = document.querySelectorAll(".item");
// giống array khi có thể loop, forEach nhưng không dùng được các method của array
for (let i =0; i<multiItems.length; i++) {
    console.log(multiItems[i]);
}

const multiItemsClass = document.getElementsByClassName("item");    // trả về HTMLCollection
console.log(multiItemsClass);

const multiItemsTag = document.getElementsByTagName("li");    // trả về HTMLCollection
console.log(multiItemsTag);

const list = document.getElementById("list");    // trả về 1 node
console.log(list);