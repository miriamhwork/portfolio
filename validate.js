document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formcontato__form");
    const nameInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("assunto");
    const messageInput = document.getElementById("mensagem");
    const submitButton = document.querySelector(".formcontato__botao");
    const mensagemEnviada = document.getElementById("mensagem-enviada");

    const showError = (input, message) => {
        const formControl = input.parentElement;
        formControl.classList.add("error");
        const errorElement = formControl.querySelector("small");
        errorElement.innerText = message;
    };

    const showSuccess = (input) => {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector("small");
    
        if (errorElement) {
            formControl.classList.remove("error");
            errorElement.innerText = "";
        }
    };

    const checkName = () => {
        const nameValue = nameInput.value.trim();
        if (nameValue === "") {
            showError(nameInput, "Nome não pode ficar em branco");
            return false;
        } else if (nameValue.length > 50) {
            showError(nameInput, "Nome deve conter no máximo 50 caracteres");
            return false;
        } else {
            showSuccess(nameInput);
            return true;
        }
    };

    const checkEmail = () => {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === "") {
            showError(emailInput, "E-mail não pode ficar em branco");
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, "E-mail inválido");
            return false;
        } else {
            showSuccess(emailInput);
            return true;
        }
    };

    const checkSubject = () => {
        const subjectValue = subjectInput.value.trim();
        if (subjectValue === "") {
            showError(subjectInput, "Assunto não pode ficar em branco");
            return false;
        } else if (subjectValue.length > 50) {
            showError(subjectInput, "Assunto deve conter no máximo 50 caracteres");
            return false;
        } else {
            showSuccess(subjectInput);
            return true;
        }
    };

    const checkMessage = () => {
        const messageValue = messageInput.value.trim();
        if (messageValue === "") {
            showError(messageInput, "Mensagem não pode ficar em branco");
            return false;
        } else if (messageValue.length > 300) {
            showError(messageInput, "Mensagem deve conter no máximo 300 caracteres");
            return false;
        } else {
            showSuccess(messageInput);
            return true;
        }
    };

    const checkForm = () => {
        const isNameValid = checkName();
        const isEmailValid = checkEmail();
        const isSubjectValid = checkSubject();
        const isMessageValid = checkMessage();
    
        const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;
        submitButton.disabled = !isFormValid;
        return isFormValid;
    };
    
    const enviarMensagem = () => {
        if (checkForm()) {
            mensagemEnviada.style.display = "block";
            submitButton.disabled = true;
            console.log("Formulário enviado!");
        }
    };

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        enviarMensagem();
    });

    nameInput.addEventListener("input", checkForm);
    emailInput.addEventListener("input", checkForm);
    subjectInput.addEventListener("input", checkForm);
    messageInput.addEventListener("input", checkForm);

});
