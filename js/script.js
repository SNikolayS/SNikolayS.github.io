// import animate from "./modules/animat";
import { isValidName, isValidEmail, isValidPhone } from './form.js';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";




    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (!isValidName(name)) {
            alert('Пожалуйста, введите корректное имя.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Пожалуйста, введите корректный почтовый ящик.');
            return;
        }

        if (!isValidPhone(phone)) {
            alert('Пожалуйста, введите корректный номер телефона (10 цифр).');
            return;
        }

        // Все данные корректны, отправляем форму на сервер
        const data = {
            name: name,
            email: email,
            phone: phone
        };

        // Отправка данных на сервер с помощью fetch()
        fetch('URL_СЕРВЕРА', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                alert('Данные успешно отправлены на сервер.');
                form.reset();
            })
            .catch(error => {
                alert('Произошла ошибка при отправке данных на сервер.');
                console.error(error);
            });
    });

});


