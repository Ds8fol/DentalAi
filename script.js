const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const preview = document.getElementById("preview");
const resultContent = document.getElementById("resultContent");

const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");


// ============================
// АНАЛИЗ ИЗОБРАЖЕНИЯ
// ============================

uploadBtn.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function () {

  const file = fileInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (event) {

    // Показываем изображение
    preview.src = event.target.result;
    preview.classList.remove("hidden");

    // Показываем результат
    resultContent.innerHTML = `
      <div style="text-align:left">

        <h3>🔎 Анализ изображения</h3>

        <p>
          <strong>Статус:</strong>
          изображение успешно загружено ✅
        </p>

        <p>
          <strong>Формат:</strong>
          ${file.type || "изображение"}
        </p>

        <p>
          <strong>Размер:</strong>
          ${(file.size / 1024 / 1024).toFixed(2)} МБ
        </p>

        <hr>

        <h3>🤖 Результат DentalAI</h3>

        <p>
          Система обнаружила область зубного ряда
          на загруженном изображении.
        </p>

        <p>
          🦷 <strong>Объект анализа:</strong>
          зубной ряд
        </p>

        <p>
          📊 <strong>Качество изображения:</strong>
          подходит для демонстрационного анализа
        </p>

        <p>
          🔬 <strong>Режим:</strong>
          исследовательский прототип
        </p>

        <div style="
          margin-top:15px;
          padding:12px;
          border-radius:10px;
          background:#fff4cc;
        ">
          ⚠️ DentalAI не ставит медицинский диагноз.
          Результат предназначен только для демонстрации
          работы интерфейса искусственного интеллекта.
        </div>

      </div>
    `;
  };

  reader.readAsDataURL(file);
});


// ============================
// ЧАТ
// ============================

function sendMessage() {

  const text = chatInput.value.trim();

  if (!text) return;

  const userMessage = document.createElement("div");

  userMessage.className = "message user";
  userMessage.textContent = text;

  messages.appendChild(userMessage);

  chatInput.value = "";

  const question = text.toLowerCase();

  let answer = "Пожалуйста, уточните вопрос.";

  if (question.includes("кариес")) {
    answer =
      "Кариес — это повреждение твёрдых тканей зуба. Он связан с воздействием кислот, образующихся бактериями зубного налёта.";
  }

  else if (
    question.includes("болит") ||
    question.includes("боль")
  ) {
    answer =
      "Зубная боль может иметь разные причины. По переписке определить причину нельзя, поэтому при боли рекомендуется обратиться к стоматологу.";
  }

  else if (
    question.includes("чистить") ||
    question.includes("щетк")
  ) {
    answer =
      "Обычно зубы рекомендуется чистить два раза в день фторсодержащей зубной пастой. Также важно очищать промежутки между зубами.";
  }

  else if (
    question.includes("кровоточ") ||
    question.includes("десн")
  ) {
    answer =
      "Кровоточивость дёсен может быть признаком воспаления или другой проблемы. Если это повторяется, стоит обратиться к стоматологу.";
  }

  else if (question.includes("запах")) {
    answer =
      "Неприятный запах изо рта может иметь разные причины, включая налёт, состояние дёсен или сухость во рту.";
  }

  else if (question.includes("чувствитель")) {
    answer =
      "Чувствительность зубов может возникать при употреблении холодного, горячего или сладкого. При постоянной чувствительности рекомендуется осмотр стоматолога.";
  }

  else if (question.includes("желт")) {
    answer =
      "Цвет зубов зависит от естественного оттенка эмали и наличия налёта. Причину изменения цвета может определить стоматолог.";
  }

  else if (question.includes("камень")) {
    answer =
      "Зубной камень — это затвердевший зубной налёт. Обычно его удаляют профессионально у стоматолога или гигиениста.";
  }

  else if (
    question.includes("нить") ||
    question.includes("флосс")
  ) {
    answer =
      "Зубная нить помогает очищать промежутки между зубами, куда щётка не всегда достаёт.";
  }

  else if (question.includes("пломб")) {
    answer =
      "Если пломба выпала, лучше обратиться к стоматологу и не пытаться самостоятельно восстановить зуб.";
  }

  else if (question.includes("брекет")) {
    answer =
      "Брекеты — ортодонтическая система для коррекции положения зубов и прикуса. Необходимость лечения определяет ортодонт.";
  }

  else if (question.includes("мудрост")) {
    answer =
      "Зубы мудрости — это третьи коренные зубы. Они прорезываются по-разному и не всегда требуют удаления.";
  }

  else if (question.includes("молочн")) {
    answer =
      "Молочные зубы также требуют ухода. Они важны для жевания, речи и нормального развития зубочелюстной системы.";
  }


  const aiMessage = document.createElement("div");

  aiMessage.className = "message ai";
  aiMessage.textContent = answer;

  messages.appendChild(aiMessage);

  messages.scrollTop = messages.scrollHeight;
}


sendBtn.addEventListener("click", sendMessage);


chatInput.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    sendMessage();
  }

});
