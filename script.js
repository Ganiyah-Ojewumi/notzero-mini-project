const randomNames = ["Tunde", "Aisha", "Chinedu", "Sola", "Yemi"];
const randomMessages = [
    "Thanks for reaching out! I'll get back to you shortly.",
    "Hi! I've received your message and will respond soon.",
    "Hello 👋 Thanks for your message. I'll reply as soon as I can.",
    "Your message has been received. Talk soon!",
    "Thanks for contacting me. I'll get back to you shortly.",
    "Hi there! I'm currently unavailable but will respond soon.",
    "Message received 👍 I'll reply as soon as possible.",
    "Thanks for the message! I'll be in touch shortly.",
    "Hello! I've seen your message and will get back to you.",
    "Thanks for reaching out. I'll respond when I'm available.",
];

const input = document.querySelector("input");
const button = document.querySelector("button");
const chatContainer = document.querySelector(".chat-container");

button.addEventListener("click", () => {
    sendMessage();
})
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter"){
        sendMessage();
    }
})

function sendMessage () {
    const typedMessage = input.value.trim();
    const messageContainer = document.createElement("div");
    chatContainer.appendChild(messageContainer);
    messageContainer.className = "message sender";
    messageContainer.innerHTML = `<p class="name">You:</p>
    <p>${typedMessage}</p>
    <p class="time">${currentTime()}</p>
    `;
    input.value = "";

    setTimeout(autoReply, 2000);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function autoReply () {
    const messageContainer = document.createElement("div");
    chatContainer.appendChild(messageContainer);
    messageContainer.className = "message receiver";
    messageContainer.innerHTML = `<p class="name">${randomItems(randomNames)}:</p>
    <p>${randomItems(randomMessages)}</p>
    <p class="time">${currentTime()}</p>
    `;

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

const currentTime = () => new Date().toLocaleTimeString([], {hour : "numeric", minute : "2-digit", hour12 : true})

const randomItems = (randomItem) => {
    return randomItem[Math.floor(Math.random() * randomItem.length)];
}
