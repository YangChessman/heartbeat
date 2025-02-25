const modalLogin = document.getElementById("modal-login");
const modalRegister = document.getElementById("modal-register");
const modalRegisterAdditional = document.getElementById("modal-register-additional");
const modalRegisterHobby = document.getElementById("modal-register-hobby");

// Кнопка для открытия модалки
const loginButton = document.querySelector(".login");
const registButton = document.querySelector(".regist");

// Крестик
const closeModalLogin = modalLogin.querySelector(".close");
const closeModalRegister = modalRegister.querySelector(".close");
const closeModalRegisterAdditional = modalRegisterAdditional.querySelector(".close");
const closeRegisterHobby = modalRegisterHobby.querySelector(".close");

// Все формы для реги
const registrationForm = document.getElementById("registration-form");
const registrationAdditionalForm = document.getElementById("registration-additional-form");
const registrationHobbyForm = document.getElementById("registration-hobby-form");

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

// Первая рег
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const password = document.getElementById("password").value;
    if (!validatePassword(password)) {
        alert("Пароль должен быть не менее 8 символов и содержать верхний и нижний регистр, а также цифры.");
    } else {
        modalRegister.classList.remove("active");
        modalRegisterAdditional.classList.add("active");
    }
});

// Вторая рег
registrationAdditionalForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    const photo = document.getElementById("photo").files[0];
    const gender = document.getElementById("gender").value;
    const birthdate = document.getElementById("birthdate").value;
    const telegram = document.getElementById("telegram").value;

    // Для дальнейшего, вдруг нада
    console.log("Фотография:", photo);
    console.log("Пол:", gender);
    console.log("Дата рождения:", birthdate);
    console.log("Ссылка на Telegram:", telegram);

    // Переключаем на третье окно
    modalRegisterAdditional.classList.remove("active");
    modalRegisterHobby.classList.add("active");
});

// Третья рег
// Обработка отправки формы
registrationHobbyForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    const maritalStatus = document.getElementById("marital-status").value;
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(el => el.value);
    const selfDescription = document.getElementById("self-description").value;
    const startButton = document.querySelector(".start-button");

    if (!maritalStatus) {
        alert("Пожалуйста, выберите семейное положение.");
        return;
    }

    if (hobbies.length === 0) {
        alert("Пожалуйста, выберите хотя бы одно хобби.");
        return;
    }

    if (selfDescription.length > 150) {
        alert("Описание о себе не должно превышать 150 символов.");
        return;
    }

    // Здесь можно добавить логику для отправки данных на сервер
    console.log("Семейное положение:", maritalStatus);
    console.log("Хобби:", hobbies);
    console.log("Описание о себе:", selfDescription);

    // Закрываем все модальные окна
    modalRegisterHobby.classList.remove("active");
    alert("Регистрация завершена!");
});

// Открытие входа
loginButton.addEventListener("click", function() {
    modalLogin.classList.add("active");
});

// Открытие первой рега
registButton.addEventListener("click", function() {
    modalRegister.classList.add("active");
});

// Закрытие модальных окон
closeModalLogin.addEventListener("click", function() {
    modalLogin.classList.remove("active");
});

closeModalRegister.addEventListener("click", function() {
    modalRegister.classList.remove("active");
});

closeModalRegisterAdditional.addEventListener("click", function() {
    modalRegisterAdditional.classList.remove("active");
});

// Закрытие третьего окна
closeRegisterHobby.addEventListener("click", function() {
    modalRegisterHobby.classList.remove("active");
});

// Закрытие по клику вне модального окна
window.addEventListener("click", function(event) {
    if (event.target == modalLogin) {
        modalLogin.classList.remove("active");
    }
    if (event.target == modalRegister) {
        modalRegister.classList.remove("active");
    }
    if (event.target == modalRegisterAdditional) {
        modalRegisterAdditional.classList.remove("active");
    }
    if (event.target == modalRegisterHobby) {
        modalRegisterHobby.classList.remove("active");
    }
});