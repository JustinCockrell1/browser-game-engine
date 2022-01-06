const body = document.querySelector(".mainscreen");



const div = document.createElement("div");
div.style.left = "10px";
div.style.top = "100px";
div.classList.add("object");
let divX = 10;

body.appendChild(div)

window.setInterval(()=>{
divX+=1;
div.style.left = `${divX}px`;
console.log("hello");

}, 100);