let n1 = document.querySelector("#Home");
let n2 = document.querySelector("#About");
let n3 = document.querySelector("#Feedback");
let n4 = document.querySelector("#ContactUs");
let n5 = document.querySelector("#Help");
let s1 = document.querySelector("#strip1");
let s2 = document.querySelector("#strip2");
let s3 = document.querySelector("#strip3");
let s4 = document.querySelector("#strip4");
let s5 = document.querySelector("#strip5");
let circle = document.querySelector(".circle");
let nav = document.querySelector(".navigator");

n1.addEventListener("click",()=>{
    circle.style.rotate = "45deg";
    s1.style.backgroundColor="red";
    s2.style.backgroundColor="chocolate";
    s3.style.backgroundColor="chocolate";
    s4.style.backgroundColor="chocolate";
    s5.style.backgroundColor="chocolate";
});
n2.addEventListener("click",()=>{
    circle.style.rotate = "22.5deg";
    s2.style.backgroundColor="red";
    s1.style.backgroundColor="chocolate";
    s3.style.backgroundColor="chocolate";
    s4.style.backgroundColor="chocolate";
    s5.style.backgroundColor="chocolate";
});
n3.addEventListener("click",()=>{
    circle.style.rotate = "0deg";
    s3.style.backgroundColor="red";
    s2.style.backgroundColor="chocolate";
    s1.style.backgroundColor="chocolate";
    s4.style.backgroundColor="chocolate";
    s5.style.backgroundColor="chocolate";
});
n4.addEventListener("click",()=>{
    circle.style.rotate = "-22.5deg";
    s4.style.backgroundColor="red";
    s2.style.backgroundColor="chocolate";
    s3.style.backgroundColor="chocolate";
    s1.style.backgroundColor="chocolate";
    s5.style.backgroundColor="chocolate";
});
n5.addEventListener("click",()=>{
    circle.style.rotate = "-45deg";
    s5.style.backgroundColor="red";
    s2.style.backgroundColor="chocolate";
    s3.style.backgroundColor="chocolate";
    s4.style.backgroundColor="chocolate";
    s1.style.backgroundColor="chocolate";
});