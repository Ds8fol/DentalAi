const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const preview = document.getElementById("preview");
const resultContent = document.getElementById("resultContent");

const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

// Загрузка изображения
uploadBtn.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (event) {
    preview.src = event.target.result;
    preview.classList.remove("hidden");

    resultContent.innerHTML = `
      <div style="text-align:left">
        <h3>Изображение загружено ✅</h3>
        <p>Файл успешно получен.</p>
        <p>DentalAI работает в демонстрационном режиме.</p>
        <p>⚠️ Результат не является медицинским диагнозом.</p>
      </div>
    `;
  };

  reader.readAsDataURL(file);
});

// Чат
function sendMessage() {
  const text = chatInput.value.trim();

  if (text === "") {
    return;
  }

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = text;

  messages.appendChild(userMessage);

  chatInput.value = "";

  setTimeout(function () {
    const aiMessage = document.createElement("div");
    aiMessage.className = "message ai";
    aiMessage.textContent =
      "Спасибо за вопрос! Я пока работаю в демонстрационном режиме. В будущей версии сюда можно подключить настоящую AI-модель.";

    messages.appendChild(aiMessage);

    messages.scrollTop = messages.scrollHeight;
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
