const screen = document.querySelector(".mainscreen");



const div = document.createElement("div");
const btn = document.createElement("input");
div.style.left = "10px";
div.style.top = "100px";
div.classList.add("object");
btn.textContent="hello";
div.appendChild(btn);
let divX = 10;
let camera = {x:0,y:0};

let target = null;
let offsetX = 0;
let offsetY = 0;

screen.appendChild(div)

// window.setInterval(()=>{
// divX+=1;

// screen.style.left = `${-camera.x}px`;
// screen.style.top = `${-camera.y}px`;
// div.style.left = `${divX}px`;
// const rect = div.getBoundingClientRect();


// }, 100);

window.addEventListener("keydown", (e)=>{
    if(e.key=="w") {
        camera.y--;
    }
    else if(e.key=="s") {
        camera.y++;
    }
    else if(e.key=="a") {
        camera.x--;
    }
    else if(e.key=="d") {
        camera.x++;
    }
});

window.addEventListener("mousedown",(e)=>{
    console.log(e.target);
   

    target = e.target;
    let rect = e.target.getBoundingClientRect();
    offsetX = e.clientX -rect.x;
    offsetY = e.clientY - rect.y;

    console.log(rect.y + " " + e.clientY + " " + offsetY);
});
window.addEventListener("mouseup", (e) =>{
    target = null;
})

window.addEventListener("mousemove",(e)=>{
    if(target!=null && target.classList.contains("object")) {
        target.style.left = `${e.clientX-offsetX}px`;
        target.style.top = `${e.clientY-offsetY}px`;
    }
});