//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function displayMessage() {
    const message = text.value;
    const time = Number(delay.value);

    await wait(time);

    output.innerText = message;
}

btn.addEventListener("click", displayMessage);