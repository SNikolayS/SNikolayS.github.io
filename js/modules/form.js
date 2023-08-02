// form.js

// Валидация имени
export function isValidName(name) {
    return /^[а-яА-ЯёЁa-zA-Z\s]+$/.test(name);
}

// Валидация почтового ящика
export function isValidEmail(email) {
    return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// Валидация номера телефона
export function isValidPhone(phone) {
    return /^\d{10}$/.test(phone);
}