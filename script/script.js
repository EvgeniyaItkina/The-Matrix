"use strict";
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// green text
const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()-_=+[]{}|;:,.<>?/\\';
const fontSize = 16;
const columns = canvas.width / fontSize;
// array of drops - one per column
// each element is a number of symbols that have already been drawn
// fills the array with zeros
//Создает новый массив длиной, равной количеству колонок. 
//Например, если экран вмещает 50 колонок, то массив будет содержать 50 элементов.
//Затем каждый элемент массива заполняется нулями, что означает, 
//что в каждой колонке еще не было нарисовано ни одного символа.
const drops = Array(Math.floor(columns)).fill(0);
function drawMatrix() {
    // Черный фон с низкой прозрачностью
    // Black background with low transparency
    // Эффект затухания
    // Fading effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    // Заливает весь холст текущим цветом, установленным в ctx.fillStyle.
    // Используется для создания эффекта затухания символов: 
    // добавляется прозрачный слой поверх предыдущего кадра.
    // Fills the entire canvas with black color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Зеленый текст
    // Green text
    ctx.fillStyle = '#0F0';
    // Устанавливает шрифт и размер шрифта
    // Sets the font and font size
    ctx.font = `${fontSize}px monospace`;
    // Для каждой колонки символов (каждый элемент массива drops):
    // For each column of symbols (each element of the drops array):
    drops.forEach((y, index) => {
        // Выбирает случайный символ из массива symbols
        // Selects a random symbol from the symbols array
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        // Рассчитывается горизонтальная позиция символа (x),
        // основываясь на индексе колонки и размере шрифта.
        // Calculates the horizontal position of the symbol (x),
        // based on the column index and the font size.
        const x = index * fontSize;
        // Рисуется символ на холсте по координатам (x, y).
        // Вертикальная позиция (y) умножается на fontSize для правильного расположения.
        // Draws the symbol on the canvas at coordinates (x, y).
        // The vertical position (y) is multiplied by fontSize for proper placement
        ctx.fillText(text, x, y * fontSize);
        // Если символ выходит за пределы экрана (по вертикали),
        // и случайное значение больше 0.975 (примерно 2.5% вероятности),
        // сбрасываем колонку, чтобы символы начинали падать заново.
        // If the symbol goes off the screen (vertically),
        // and a random value is greater than 0.975 (approximately 2.5% probability),
        // reset the column so that the symbols start falling again.
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        // Увеличиваем вертикальную позицию для следующего символа в этой колонке,
        // чтобы символ "падал" вниз.
        // Increase the vertical position for the next symbol in this column
        // so that the symbol "falls" down.
        drops[index]++;
    });
}
setInterval(drawMatrix, 50);
// Адаптация к изменению размера окна
// Adaptation to window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
