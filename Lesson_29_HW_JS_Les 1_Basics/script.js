
// задание 1: Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”

function getUserName() {
    let userName = prompt('What is your name?');
    alert(`Приветствую тебя ${userName} на планете Земля`);
}

getUserName();

// задание 2: Запитай рік народження користувача, порахуй його/її вік і виведи результат. 
// Поточний рік вкажи в коді як константу

function getUserAge() {
    const currentYear = 2023;
    let userYearOfBirth = +prompt('What is your year of birth?');
        
    if (userYearOfBirth <= 0) {
        confirm('Вы ввели не верный год рождения');
    } else if (isNaN(userYearOfBirth)) {
        confirm('Вы ввели НЕ число');
        getUserAge();
    } else {
        let userAge = currentYear - userYearOfBirth;
        confirm(`Вам ${userAge} лет`);
    }
    
}

getUserAge();


// Задание 3: Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

let firstSideOfSquare = +prompt('Put the first side of rectangle');
let secondSideOfSquare = +prompt('Put the second side of rectangle');
let rectanglPerimetr = (firstSideOfSquare + secondSideOfSquare) * 2;
alert(`Периметр прямоугольника равен ${rectanglPerimetr}`);
