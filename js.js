// JS файл для обработки взаимодействий на странице

document.addEventListener("DOMContentLoaded", function() {

    // Функция для открытия/закрытия FAQ (по клику на вопрос)
    const faqItems = document.querySelectorAll(".faq-item h3");

    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            const paragraph = item.nextElementSibling; // находим ответ на вопрос (p)
            paragraph.style.display = paragraph.style.display === "block" ? "none" : "block"; // меняем видимость
        });
    });

});
