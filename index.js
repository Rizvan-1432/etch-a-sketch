const flexContainer = document.getElementById('flexContainer');
const resetButton = document.getElementById('resetButton');

// Создаем сетку 16x16
for (let i = 0; i < 256; i++) { // 16 * 16 = 256
    const block = document.createElement('div');
    block.className = 'block';
    
    // Добавляем событие для изменения цвета блока при наведении
    block.addEventListener('mouseover', () => {
        block.style.backgroundColor = getRandomColor();
    })

    // Добавляем блок в контейнер
    flexContainer.appendChild(block);
}

// Функция для генерации случайного цвета
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Добавляем функциональность для кнопки "Сброс"
resetButton.addEventListener('click', () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.style.backgroundColor = '#e0e0e0'; // Сбрасываем цвет на исходный
    });
});