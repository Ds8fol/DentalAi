const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const preview = document.getElementById("preview");
const resultContent = document.getElementById("resultContent");

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
          Сейчас DentalAI работает в демонстрационном режиме.
        </p>
        <p>
          В будущей версии здесь будет выполняться анализ
          изображения с помощью модели компьютерного зрения.
        </p>
        <p>
          ⚠️ Результат не является медицинским диагнозом.
        </p>
      </div>
    `;
  };

  reader.readAsDataURL(file);
});
