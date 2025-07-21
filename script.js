let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice= document.querySelector("#voice");

// Speak Function
function speak(text) {
    window.speechSynthesis.cancel();
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
}

// Greet based on time
function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 1 && hours < 12) {
        speak("Hello, Good Morning Hasan");
    } else if (hours >= 12 && hours < 18) {
        speak("Hello, Good Afternoon Hasan");
    } else {
        speak("Hello, Good Evening Hasan");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

// SpeechRecognition
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";      // Use quotes
    voice.style.display = "block";   // Use quotes
});
// When speech is recognized
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takecmd(transcript);
    console.log("You said:", transcript);
};

// Command handler
function takecmd(message) {
     btn.style.display = "flex";      // Use quotes
    voice.style.display = "none"; 
    const msg = message.toLowerCase();

    // Greetings
    if (msg.includes("hello") || msg.includes("hey") || msg.includes("hi")) {
        speak("What can I help you, Hasan?");
    }

    // Introduction
    else if (msg.includes("who are you")) {
        speak("I'm a virtual assistant, created by Hasan Qureshi on 21 July 2025.");
    }
    else if(msg.includes("open Calculator")){
        speak("Opening calculater, Hasan...");
        window.open("calculator://")
    }
    // Websites Commands
    else {
         switch (true) { 
            case msg.includes("open google"):
                speak("Opening Google, Hasan...");
                window.open("https://www.google.com", "_blank");
                break;

            case msg.includes("open youtube"):
                speak("Opening YouTube, Hasan...");
                window.open("https://www.youtube.com", "_blank");
                break;

            case msg.includes("open portfolio"):
                speak("Opening Portfolio, Hasan...");
                window.open("https://hasanqu14.github.io/portfolio/", "_blank");
                break;

            case msg.includes("open instagram"):
                speak("Opening Instagram, Hasan...");
                window.open("https://www.instagram.com/hasanqu14/", "_blank");
                break;

            case msg.includes("open gmail"):
                speak("Opening Gmail, Hasan...");
                window.open("https://mail.google.com", "_blank");
                break;

            case msg.includes("open github"):
                speak("Opening GitHub, Hasan...");
                window.open("https://github.com/dashboard", "_blank");
                break;

            case msg.includes("open linkedin"):
                speak("Opening LinkedIn, Hasan...");
                window.open("https://www.linkedin.com/in/hasan-qureshi-569979277/", "_blank");
                break;

            case msg.includes("open chatgpt"):
                speak("Opening ChatGPT, Hasan...");
                window.open("https://chatgpt.com/", "_blank");
                break;

            case msg.includes("open deepseek"):
                speak("Opening DeepSeek, Hasan...");
                window.open("https://chat.deepseek.com/", "_blank");
                break;

            case msg.includes("open copilot"):
                speak("Opening Copilot, Hasan...");
                window.open("https://copilot.microsoft.com/", "_blank");
                break;

            case msg.includes("open gemini"):
                speak("Opening Gemini, Hasan...");
                window.open("https://gemini.google.com/", "_blank");
                break;

            case msg.includes("open x ai"):
                speak("Opening X AI Grok, Hasan...");
                window.open("https://grok.x.ai/", "_blank");
                break;

            case msg.includes("open blackbox"):
                speak("Opening BlackBox, Hasan...");
                window.open("https://www.blackbox.ai/", "_blank");
                break;

           default:
                speak(`This is what I found on the internet regarding ${message}, Hasan.`);
                window.open(`https://www.google.com/search?q=${message}`, "_blank");
                break;
        } 
    }
}

