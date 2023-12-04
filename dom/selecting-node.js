// 1. DOM Node
// DOM - Document Object Model
// DOM Node & DOM Element
// DOM Attribute & DOM Property

// 2. Selecting DOM Nodes
// 2.1. document.querySelector(): .header, p, #heading --> trả về 1 node nếu tồn tại hoặc null
const singleNode = document.querySelector("h1");
console.log(singleNode);
const singleNode2 = document.querySelector(".container");
console.log(singleNode2);
const singleNode3 = document.querySelector("#spinner");
console.log(singleNode3);
const singleNode4 = document.querySelector("#heading");
console.log(singleNode4);

// 2.2. document.querySelectorAll() --> trả về 1 node list hoặc 1 empty node list
// node list: array-like object --> có thể sử dụng forEach, loop nhưng không thể sử dụng các method của array
const multiNode = document.querySelectorAll(".item");
console.log(multiNode);

// 2.3. document.getElementsByClassName() --> trả về 1 HTMLCollection hoặc empty HTMLCollection
const classNode = document.getElementsByClassName("header");
console.log(classNode);

// 2.4. document.getElementsByTagName() --> trả về 1 HTMLCollection hoặc empty HTMLCollection
const tagNode = document.getElementsByTagName("li");
console.log(tagNode);

// 2.5. document.getElementById() --> trả về 1 node hoặc null
const idNode = document.getElementById("spinner");
console.log(idNode);

// hay dùng: document.querySelector(), document.querySelectorAll()