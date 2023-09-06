// // Получаем ссылку на элемент input
// var inputElement = document.getElementById("form_input");

// Добавляем обработчик события для фокуса (при входе в поле ввода)
inputElements.addEventListener("focus", function() {
    // Очищаем текст Placeholder
    inputElement.placeholder = "";
});

// Добавляем обработчик события для потери фокуса (при выходе из поля ввода)
inputElements.addEventListener("blur", function() {
    // Восстанавливаем текст Placeholder, если поле ввода пустое
    if (inputElement.value === "") {
        inputElement.placeholder = "Введите текст";
    }
});

// Получаем ссылки на элементы input и label
var inputElements = document.querySelectorAll(".form_input");
var labelElements = document.querySelectorAll(".form_label");

// Добавляем обработчики события для ввода текста
inputElements.forEach(function(inputElement, index) {
  inputElement.addEventListener("input", function() {
    // Если поле ввода не пустое, показываем label
    if (inputElement.value !== "") {
      labelElements[index].style.opacity = 1;
    } else {
      labelElements[index].style.opacity = 0;
    }
  });
});