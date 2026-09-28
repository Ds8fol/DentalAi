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
      question.includes("кровь из дес")
    ) {

      answer =
        "Кровоточивость дёсен может быть связана с воспалением дёсен или другими причинами. Если кровоточивость повторяется, стоит обратиться к стоматологу для осмотра.";

    } else if (
      question.includes("запах изо рта") ||
      question.includes("неприятный запах") ||
      question.includes("запах изо")
    ) {

      answer =
        "Неприятный запах изо рта может быть связан с налётом, состоянием дёсен, сухостью во рту или другими причинами. Если проблема сохраняется, стоит обратиться к стоматологу.";

    } else if (
      question.includes("чувствитель") ||
      question.includes("чувствительные зуб")
    ) {

      answer =
        "Чувствительность зубов может проявляться при употреблении холодного, горячего или сладкого. Причины бывают разными, поэтому при постоянной чувствительности лучше пройти осмотр у стоматолога.";

    } else if (
      question.includes("желтые зуб") ||
      question.includes("желтеют зуб") ||
      question.includes("желтизн")
    ) {

      answer =
        "Цвет зубов зависит от естественного оттенка эмали, налёта и других факторов. Изменение цвета не всегда означает заболевание. Стоматолог может определить причину изменения цвета.";

    } else if (
      question.includes("зубной камень") ||
      question.includes("камень на зуб")
    ) {

      answer =
        "Зубной камень — это затвердевший зубной налёт. Обычно его удаляют профессионально во время стоматологической процедуры.";

    } else if (
      question.includes("зубная нить") ||
      question.includes("флосс")
    ) {

      answer =
        "Зубная нить помогает очищать промежутки между зубами, куда зубная щётка может не попасть. Технику использования лучше один раз показать у стоматолога или гигиениста.";

    } else if (
      question.includes("менять щетку") ||
      question.includes("новую щетку")
    ) {

      answer =
        "Зубную щётку обычно меняют примерно каждые три месяца или раньше, если её щетинки заметно износились.";

    } else if (
      question.includes("фтор") ||
      question.includes("фторид")
    ) {

      answer =
        "Фториды помогают укреплять зубную эмаль и снижать риск кариеса. Подходящее средство гигиены можно выбрать с учётом возраста и рекомендаций стоматолога.";

    } else if (
      question.includes("молочн") ||
      question.includes("молочные зуб")
    ) {

      answer =
        "Молочные зубы важны для жевания, речи и нормального развития зубочелюстной системы. Поэтому за ними тоже необходимо ухаживать и лечить проблемы по рекомендации стоматолога.";

    } else if (
      question.includes("откололся зуб") ||
      question.includes("отколол зуб") ||
      question.includes("сломал зуб")
    ) {

      answer =
        "При повреждении зуба желательно обратиться к стоматологу. Если сохранился отколовшийся фрагмент, его можно взять с собой на приём.";

    } else if (
      question.includes("пломба") ||
      question.includes("выпала пломба")
    ) {

      answer =
        "Если пломба выпала, лучше записаться к стоматологу и не пытаться самостоятельно восстановить зуб. До осмотра стоит бережно относиться к повреждённому месту.";

    } else if (
      question.includes("как часто к стоматолог") ||
      question.includes("как часто ходить") ||
      question.includes("осмотр")
    ) {

      answer =
        "Периодичность профилактических осмотров зависит от состояния полости рта и индивидуальных факторов. Рекомендуемый график лучше обсудить со своим стоматологом.";

    } else if (
      question.includes("брекет")
    ) {

      answer =
        "Брекеты — ортодонтическая система, которая используется для коррекции положения зубов и прикуса. Необходимость лечения определяет врач-ортодонт.";

    } else if (
      question.includes("зуб мудрости") ||
      question.includes("восьмерк")
    ) {

      answer =
        "Зубы мудрости — это третьи коренные зубы. Они могут прорезываться по-разному и не всегда требуют удаления. Решение принимается после осмотра и, при необходимости, рентгенологического исследования.";

    } else if (
      question.includes("предотвратить кариес") ||
      question.includes("профилактика кариеса")
    ) {

      answer =
        "Для профилактики кариеса важны регулярная чистка зубов фторсодержащей пастой, очищение промежутков между зубами, разумное потребление сахара и регулярные стоматологические осмотры.";

    } else {

      answer =
        "Я пока работаю как демонстрационный AI-помощник. Попробуйте спросить о кариесе, зубной боли, чистке зубов, дёснах, чувствительности, зубном камне, брекетах или зубах мудрости.";

    }


    const aiMessage = document.createElement("div");

    aiMessage.className = "message ai";

    aiMessage.textContent = answer;

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
