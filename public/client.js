const socket = io();

const username = prompt('Gib deinen Namen ein');
const name = document.querySelector('#name');
name.innerText = username;

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const messages = document.querySelector('#messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('send_chat', input.value, username);
        input.value = '';
    }
});

socket.on('broadcast_chat', (msg, username) => {
    const item = document.createElement('li');
    // item.textContent = msg + ' - ' + username;
    item.innerHTML = `<span class="name">${username}</span><span class="message">${msg}</span>`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})
