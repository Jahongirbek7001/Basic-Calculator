let display: any = document.querySelector<HTMLDivElement>('#display')
const form = document.querySelector<HTMLFormElement>('#form')

form?.addEventListener('submit', e => {
    e.preventDefault();
})

function handleClick(item: any) {
    display.innerHTML += item;
}
function clearClick() {
    display.innerHTML = '';
}

function equalsClick() {
    console.log(display);
    display.innerHTML = eval(display?.textContent);
}

function backspace() {
    let text = display?.textContent;
    if (text.length > 0) {
        display.innerHTML = text.slice(0, -1);
    } else {
        display.innerHTML = text;
    }
}

function percent() {
    let n: number = Number(display?.textContent);
    display.innerHTML = n / 100;
}