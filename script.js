const examples = {
  pl: [
    "Przetłumacz ‘Miłego dnia!’ na angielski",
    "Jak stworzyć e-book w Canvie?",
    "Pomóż mi zaprojektować stronę promującą mój kurs",
    "Jakie hashtagi do Reels o stylizacji?",
    "Napisz post na Facebooka o makijażu dziennym"
  ],
  en: [
    "Translate “Jak się masz?” into English",
    "How to write a good product description for Amazon?",
    "Create a morning affirmation",
    "What is the best tool to learn English for beginners?",
    "Suggest 3 TikTok ideas for beauty content"
  ]
};

let currentLang = "";

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("language-select").style.display = "none";
  document.getElementById("chat").style.display = "block";
  document.getElementById("chat-heading").innerText = lang === 'pl' ? "Wybierz pytanie lub napisz swoje:" : "Choose a question or write your own:";
  document.getElementById("input").placeholder = lang === 'pl' ? "Wpisz wiadomość..." : "Type a message...";
  
  const exContainer = document.getElementById("examples");
  exContainer.innerHTML = "";
  examples[lang].forEach(text => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => {
      document.getElementById("input").value = text;
    };
    exContainer.appendChild(btn);
  });
}

function sendMessage() {
  const message = document.getElementById("input").value;
  const responseBox = document.getElementById("response");
  responseBox.innerText = "🤖 Asystentka odpowiada (demo)...

" + message;
}
