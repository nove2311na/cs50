// 1. getAttribute("attributeName"): dựa vào node được select  --> selector.getAttribute("attributeName") 
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
// if(link){
    
// }
const li = document.querySelectorAll("li");
li.forEach(item => {
    console.log(item.getAttribute("class"));
});
console.log(li);

// 2. setAttribute("attributeName", "attributeValue"): dựa vào node được select --> selector.setAttribute("attributeName", "attributeValue")
link.setAttribute("target", "_blank");

const listLinks = document.querySelectorAll("a.link");
listLinks.forEach(item => {
    item.setAttribute("target", "_blank");
});

// item: phần tử trong đó

// const listLinkA = document.querySelectorAll("a");
// listLinkA.forEach(item => {
//     item.setAttribute("target", "_blank");
// })

// 3. removeAttribute("attributeName"): dựa vào node được select --> selector.removeAttribute("attributeName")
// const p = document.querySelector("#spinner");
// p.removeAttribute("style")
const pList = document.querySelectorAll("p");
pList.forEach(item => {
    item.removeAttribute("style");
});

// 4. hasAttribute("attributeName"): dựa vào node được select --> selector.hasAttribute("attributeName")