
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const result = document.getElementById("result");

imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];

  if (!file) return;

  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  result.innerHTML = `
    <strong>Изображение загружено ✅</strong>
    <p>Файл готов к демонстрационному анализу.</p>
  `;
});

analyzeBtn.addEventListener("click", function () {
  if (!imageInput.files.length) {
    result.innerHTML = `
      <strong>Сначала загрузите изображение.</strong>
    `;
    return;
  }

  result.innerHTML = `
    <strong>🔬 Демонстрационный анализ</strong>
    <p>
      Изображение получено и подготовлено для анализа.
    </p>
    <p>
      Сейчас это демонстрационный режим.
      Результат не является медицинским диагнозом.
    </p>
  `;
});
