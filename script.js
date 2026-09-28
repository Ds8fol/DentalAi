const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const preview = document.getElementById("preview");
const resultContent = document.getElementById("resultContent");

const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");


// =========================
// ЗАГРУЗКА ИЗОБРАЖЕНИЯ
// =========================

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
        <p>
          Файл успешно получен.
          DentalAI сейчас работает в демонстрационном режиме.
        </p>
        <p>
          Изображение подготовлено для будущего анализа
          с помощью модели компьютерного зрения.
        </p>
        <p>
          ⚠️ Результат не является медицинским диагнозом.
        </p>
      </div>
    `;
  };

  reader.readAsDataURL(file);
});


// =========================
// ДЕМОНСТРАЦИОННЫЙ ЧАТ
// =========================

function sendMessage() {
  const text = chatInput.value.trim();

  if (!text) return;

  messages.innerHTML += `
    <div class="message user">
      ${text}
    </div>
  `;

  chatInput.value = "";

  setTimeout(function () {
    messages.innerHTML += `
      <div class="message ai">
        Спасибо за вопрос! Сейчас я работаю в демонстрационном режиме.
        В следующей версии сюда можно подключить настоящую AI-модель.
        Для медицинских вопросов результаты должны проверяться
        квалифицированным стоматологом.
      </div>
    `;

    messages.scrollTop = messages.scrollHeight;
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
