// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`


const input = document.querySelector('.contact-form-input');

// input.addEventListener('input', (event) => {
    
//     if (event.target.value.length > 6) {
//         input.classList.remove('error');
//         input.classList.add('success');
//     } else {
//         input.classList.remove('success');
//        input.classList.add('error'); 
//     }
// });


// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener('focus', (event) => {
//     console.log(event.target.value);
//     if (event.target.value.length === 0) {
//         event.target.style.outline = '3px solid red';
//     } else {
//         event.target.style.outline = '3px solid green';
//     }
// });


// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener('blur', (event) => {
//     console.log(event.target.value);
//     if (event.target.value.length === 0) {
//         event.target.style.outline = '3px solid red';
//     } else {
//         event.target.style.outline = '3px solid green';
//     }
// });


// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector('.contact-form');
const span = document.querySelector('.js-username-output');
const checkbox = document.querySelector('.contact-form-checkbox');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {accept, userName} = event.target.elements;
    if (accept.checked && userName.value.trim()) {
        const obj = {
            userName: userName.value.trim(),
        }  
        console.log(obj); 
        span.textContent = obj.userName;
        form.reset();
        span.textContent = "Anonymous";
    } else {
        alert('Erorr');
    } 
});

input.addEventListener('input', (event) => {
    span.textContent = event.target.value;
});