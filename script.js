const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const preview = document.getElementById("preview");
const fileName = document.getElementById("fileName");
const resultContent = document.getElementById("resultContent");

uploadBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", handleFile);

function handleFile() {
  const file = fileInput.files[0];

  if (!file) return;

  fileName.textContent = "Файл: " + file.name;

  const reader = new FileReader();

  reader.onload = function(event) {
    preview.src = event.target.result;
    preview.classList.remove("hidden");

    resultContent.innerHTML = `
      <div style="text-align:left">
        <h3>Изображение загружено ✓</h3>

        <p>
          Сейчас это демонстрационный режим.
          На следующем этапе подключим настоящую
          модель компьютерного зрения.
        </p>

        <div style="
          background:#eef5ff;
          border-radius:12px;
          padding:15px;
          margin-top:15px;
        ">
          <b>Что добавим дальше:</b>

          <ul>
            <li>анализ изображения ИИ;</li>
            <li>выделение подозрительных областей;</li>
            <li>уровень уверенности модели;</li>
            <li>объяснение результата.</li>
          </ul>
        </div>
      </div>
    `;
  };

  reader.readAsDataURL(file);
}


const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

function sendMessage() {
  const text = chatInput.value.trim();

  if (!text) return;

  messages.innerHTML += `
    <div class="message user">
      ${escapeHtml(text)}
    </div>
  `;

  chatInput.value = "";

  setTimeout(() => {
    messages.innerHTML += `
      <div class="message ai">
        Это демонстрационный режим DentalAI.
        На следующем этапе подключим настоящую
        языковую модель и научную базу.
      </div>
    `;

    messages.scrollTop = messages.scrollHeight;
  }, 400);
}

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(char) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[char];
  });
}
