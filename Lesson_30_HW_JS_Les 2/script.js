
// задание 1: Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.



function userMoneyCalculator() {

let totalUserMoney = +prompt('How much money do you have?');
let itemPrice = +prompt('How much dos it cost?');


if (totalUserMoney < itemPrice) {
    alert('You do not have enouth money');
} else {
    let shoppingCalculation = (totalUserMoney / itemPrice);
    let possibleItemNumber = Math.floor(shoppingCalculation);
    let restOfUserMoney = totalUserMoney - (possibleItemNumber * itemPrice);

    confirm(`You can buy ${possibleItemNumber} items`);
    confirm(`The rest of your money will be ${restOfUserMoney}`);
    }
}

userMoneyCalculator();




// задание 2: Запитай у користувача тризначне число і виведи його задом наперед. 
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).


function getReversNumber() {

let numberFromUser = +prompt('Введите трехзначное число');
    if (isNaN(numberFromUser)) {
        alert('Введите число');
        getReversNumber();
    } else {
        let userNumberString = numberFromUser.toString();
        let numberSplit = userNumberString.split('');

        // Осторожно: Реверс изменяет исходный массив
        let numberReverse = numberSplit.reverse();
        let numberReversedJoin = numberReverse.join('');
        alert(numberReversedJoin);
    }

}    

getReversNumber();








// function getReversNumber() {

// let numberFromUser = +prompt('Введите трехзначное число');
//     if (isNaN(numberFromUser)) {
//         alert('Введите число');
//         getReversNumber();

//     } else if (!isNaN(numberFromUser)) {
//         let userNumberString = numberFromUser.toString();

//         //как запустить проверку в этом условиии и если true то проверять следующее условие?
        
        
//     }

//     if (userNumberString.length >= 4 || userNumberString.length < 3 ){
//         alert('Введите ТРЕХ значное число');
//         // как запустить повторение введения данных в конкретно этих условиях

       
    
//     }
    
//     else {
        
//         let numberSplit = userNumberString.split('');
        
//         // Осторожно: Реверс изменяет исходный массив
//         let numberReverse = numberSplit.reverse();
//         let numberReversedJoin = numberReverse.join('');
//         alert(numberReversedJoin);
//     }

// }    






