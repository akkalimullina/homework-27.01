document.addEventListener("DOMContentLoaded", function() {
//alert('Привет, мир!');
    
//alert('Привет');
//alert('Мир'); 
//alert(3 +1+2);

//let message = "Hi"
//alert(message)

//let ter = 7>12;
//console.log(ter);

//let has = true;
//let isL = false;

//let can = has && isL;
//console.log(can);


// 1
let age = prompt('Введите ваш возраст:' ); {
if (age < 65) alert( 'Вам ещё рано на пенсию' );
if (age > 65) alert( 'Поздравляем с пенсионным возрастом!' );
};
})

//2
function guesspass() {
    let first = prompt("первое число"); // Запрашиваем ответ у пользователя
    let second = prompt("второе число");
  
    first = parseInt(first); // присваиваем 
    second = parseInt(second)
    if (second > first) alert ('Второе число больше');
    if (second < first) alert ('Первое число больше');
    else {
        alert('Числа равны');
    }
  }
  
guesspass() // выводим окно

//4
const secretNumber = 7;
let Guess = prompt('Угадай число'); // Запрашиваем число у пользователя

if (Guess === secretNumber) { // Проверяем, правильно ли угадал пользователь
  alert('Вы угадали!');
} else { 
  alert('Попробуйте ещё раз!');
}

//5
function loginpass() {
    let login = prompt("Введите логин:"); // Запрашиваем ответ у пользователя
    let password = prompt("Введите пароль:");
  
    if (login === "admin" && password === "12345") // Проверяем
     {alert('Добро пожаловать');
    } else {
        alert('Неверный логин или пароль');
    }
  }
  
  loginpass(); // выводим окно
  