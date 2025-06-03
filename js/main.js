
console.log("JS Connected");

const raspberry = document.querySelector("#raspberry");
const orange = document.querySelector("#orange");
const melon = document.querySelector("#melon");
const lemon = document.querySelector("#lemon");
const blueberry = document.querySelector("#blueberry");
const grape = document.querySelector("#grape");

function logTheId() {
    console.log(this.id);
}

raspberry.addEventListener("click", logTheId);
orange.addEventListener("click", logTheId);
melon.addEventListener("click", logTheId);
lemon.addEventListener("click", logTheId);
blueberry.addEventListener("click", logTheId);
grape.addEventListener("click", logTheId);