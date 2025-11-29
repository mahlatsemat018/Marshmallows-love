// -------------------------------
// Password protection
// -------------------------------
const accessPassword = "Marshmallow2025";
const enteredPassword = prompt("Enter the password to access the website:");
if (enteredPassword !== accessPassword) {
    alert("Wrong password! You are not the lover.");
    window.location.href = "https://www.google.com";
}

// -------------------------------
// Messages section
// -------------------------------
function addMyMessage() {
    addMessage("my-message", "message-mahlatse");
}

function addHerMessage() {
    addMessage("her-message", "message-ntebaleng");
}

function addMessage(inputId, messageClass) {
    const input = document.getElementById(inputId);
    const container = document.getElementById('message-container');

    if (input.value.trim() !== "") {
        const message = document.createElement('div');
        message.className = messageClass;

        const msgText = document.createElement('span');
        msgText.textContent = input.value;
        message.appendChild(msgText);

        const time = document.createElement('span');
        time.textContent = " [" + new Date().toLocaleTimeString() + "]";
        time.style.fontSize = "0.7em";
        time.style.color = "#fff";
        message.appendChild(time);

        container.appendChild(message);
        input.value = "";
        container.scrollTop = container.scrollHeight;
    }
}

// -------------------------------
// Background slideshow for all pics
// -------------------------------
let currentBgIndex = 0;

// List every picture explicitly
const backgroundImages = [
    "Marshmallow/pic1.jpeg",
    "Marshmallow/pic2.jpeg",
    "Marshmallow/pic3.jpeg",
    "Marshmallow/pic4.jpeg",
    "Marshmallow/pic5.jpeg",
    "Marshmallow/pic6.jpeg",
    "Marshmallow/pic7.jpeg",
    "Marshmallow/pic8.jpeg",
    "Marshmallow/pic9.jpeg",
    "Marshmallow/pic10.jpeg",
    "Marshmallow/pic11.jpeg"
];

function changeBackground() {
    document.body.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
}

// Change every 3 seconds (3000ms)
setInterval(changeBackground, 8000);
changeBackground();


// -------------------------------
// Memories section
// -------------------------------
function showMemories() {
    const section = document.getElementById('memories-section');
    const container = document.getElementById('memories-container');
    section.style.display = "block";

    if (container.children.length === 0) {
        for (let i = 1; i <= 20; i++) {
            // Try image
            const img = document.createElement('img');
            img.src = `Memories/photo${i}.jpeg`;
            img.onerror = function() { this.remove(); };
            container.appendChild(img);

            // Try video
            const video = document.createElement('video');
            video.src = `Memories/video${i}.mp4`;
            video.controls = true;
            video.onerror = function() { this.remove(); };
            container.appendChild(video);
        }
    }

    section.scrollIntoView({ behavior: "smooth" });
}









