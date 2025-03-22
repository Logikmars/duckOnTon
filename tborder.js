function generateCirclePoints(radius, numberOfPoints) {
    const points = [];
    const angleIncrement = (2 * Math.PI) / numberOfPoints; // Угол между точками

    for (let i = 0; i < numberOfPoints; i++) {
        const angle = i * angleIncrement; // Угол в радианах
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push({ x, y });
    }

    return points;
}

// Функция для формирования строки с текстом для обводки и теней
function generateTextShadowString(outlinePoints, shadowPoints) {
    const allPoints = [...outlinePoints, ...shadowPoints]; // Сначала обводка, потом тени
    return `text-shadow: ` + allPoints.map(point => `${point.x.toFixed(2)}px ${point.y.toFixed(2)}px #${point.color}`).join(', ') + ";";
}

// Получаем аргументы командной строки
const args = process.argv.slice(2);
const outlineColor = args[0] || '000000'; // Цвет обводки, по умолчанию черный
const numberOfShadows = parseInt(args[1], 10) || 8; // Количество теней, по умолчанию 8
const outlineThickness = parseFloat(args[2]) || 1; // Толщина обводки, по умолчанию 1
const offsetX = parseFloat(args[3]) || 0; // Смещение по оси X, по умолчанию 0
const offsetY = parseFloat(args[4]) || 0; // Смещение по оси Y, по умолчанию 0
const shadowColor = args[5] || null; // Цвет тени, по умолчанию null

// Проверяем корректность количества теней и толщины обводки
if (isNaN(numberOfShadows) || numberOfShadows <= 0) {
    console.error("Пожалуйста, введите корректное количество теней.");
    process.exit(1);
}

if (isNaN(outlineThickness) || outlineThickness <= 0) {
    console.error("Пожалуйста, введите корректную толщину обводки.");
    process.exit(1);
}

// Генерируем точки для обводки
const outlinePoints = generateCirclePoints(outlineThickness, numberOfShadows).map(point => ({
    x: point.x,
    y: point.y,
    color: outlineColor // Добавляем цвет обводки
}));

// Генерируем точки для теней, добавляя смещения только если указан цвет
let shadowPoints = [];
if (shadowColor) {
    shadowPoints = generateCirclePoints(outlineThickness, numberOfShadows).map(point => ({
        x: point.x + offsetX,
        y: point.y + offsetY,
        color: shadowColor // Добавляем цвет тени
    }));
}

// Формируем строку с текстом
const textShadowString = generateTextShadowString(outlinePoints, shadowPoints);
console.log(textShadowString); // Выводим строку