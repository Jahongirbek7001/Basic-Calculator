"use strict";
let display = document.querySelector('#display');
const form = document.querySelector('#form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', e => {
    e.preventDefault();
});
function handleClick(item) {
    display.innerHTML += item;
}
function clearClick() {
    display.innerHTML = '';
}
function equalsClick() {
    console.log(display);
    display.innerHTML = eval(display === null || display === void 0 ? void 0 : display.textContent);
}
function backspace() {
    let text = display === null || display === void 0 ? void 0 : display.textContent;
    if (text.length > 0) {
        display.innerHTML = text.slice(0, -1);
    }
    else {
        display.innerHTML = text;
    }
}
function percent() {
    let n = Number(display === null || display === void 0 ? void 0 : display.textContent);
    display.innerHTML = n / 100;
}
