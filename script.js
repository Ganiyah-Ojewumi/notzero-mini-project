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
const messagesArray = JSON.parse(localStorage.getItem("messagesArray")) || [];

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

    messagesArray.push({
       name: "You",
       text: typedMessage,
       isSender : true,
       time: currentTime(),
    })

    localStorage.setItem("messagesArray", JSON.stringify(messagesArray));

    renderMessage();

    input.value = "";

    setTimeout(autoReply, 2000);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function autoReply () {
    const replyName = randomItems(randomNames);
    const replyItem = randomItems(randomMessages);

    messagesArray.push({
       name: replyName,
       text: replyItem,
       isSender: false,
       time: currentTime(),
    })

    localStorage.setItem("messagesArray", JSON.stringify(messagesArray));

    renderMessage();

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function renderMessage () {
    chatContainer.innerHTML = "";
    messagesArray.forEach((message) => {
        const messageContainer = document.createElement("div");
        chatContainer.appendChild(messageContainer);
        messageContainer.classList.add("message",
            message.isSender ? "sender" : "receiver"
        )
        messageContainer.innerHTML = `<p class="name">${message.name}:</p>
        <p>${message.text}</p>
        <p class="time">${message.time}</p>
        `;
    })

}

const currentTime = () => new Date().toLocaleTimeString([], {hour : "numeric", minute : "2-digit", hour12 : true})

const randomItems = (randomItem) => {
    return randomItem[Math.floor(Math.random() * randomItem.length)];
}
