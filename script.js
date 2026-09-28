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
        <p>Файл успешно получен.</p>
        <p>DentalAI работает в демонстрационном режиме.</p>
        <p>⚠️ Результат не является медицинским диагнозом.</p>
      </div>
    `;
  };

  reader.readAsDataURL(file);
});


// =========================
// ДЕМОНСТРАЦИОННЫЙ AI-ЧАТ
// =========================

function sendMessage() {
  const text = chatInput.value.trim();

  if (!text) return;

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = text;

  messages.appendChild(userMessage);

  chatInput.value = "";

  setTimeout(function () {

    const question = text.toLowerCase();

    let answer;


    if (question.includes("кариес")) {

      answer =
        "Кариес — это повреждение твёрдых тканей зуба. Он связан с воздействием кислот, которые образуются бактериями зубного налёта. При подозрении на кариес стоит обратиться к стоматологу.";

    } else if (
      question.includes("болит зуб") ||
      question.includes("зуб болит") ||
      question.includes("зубная боль")
    ) {

      answer =
        "Зубная боль может иметь разные причины, включая кариес, воспаление или травму. По переписке определить причину нельзя, поэтому при боли рекомендуется обратиться к стоматологу.";

    } else if (
      question.includes("чистить зуб") ||
      question.includes("чистка зуб") ||
      question.includes("щетка")
    ) {

      answer =
        "Обычно рекомендуют чистить зубы два раза в день фторсодержащей зубной пастой. Также важно очищать промежутки между зубами. Индивидуальные рекомендации может дать стоматолог.";

    } else if (
      question.includes("кровоточ") ||
