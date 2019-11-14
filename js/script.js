function validateForm() {
    if (validateReason() && nameCheck() && emailCheck() && phoneCheck() && validateMessage()) {
        openModal();
        return true;
    } else {
        return false;
    }
}

function openModal() {
    $('#myModal').modal('toggle');
}

function validateReason() {
    let reason = document.getElementById("reason");
    if (!reason.value == "") {
        document.getElementById("reason").className = "form-control is-valid";
        return true;
    } else {
        document.getElementById("reason").className = "form-control is-invalid";
        document.getElementById("checkReason").className = "invalid-feedback";
        document.getElementById("checkReason").innerHTML = "Selecciona un motivo";
        return false;
    }
}

function nameCheck() {
    let name = document.contactForm.name.value;
    if ((name.length > 2) && (isNaN(name))) {
        document.getElementById("name").className = "form-control is-valid";
        return true;
    } else {
        document.getElementById("name").className = "form-control is-invalid";
        document.getElementById("checkName").className = "invalid-feedback";
        document.getElementById("checkName").innerHTML = "El nombre debe contener más de 2 letras";
        return false;
    }
}

function emailCheck() {
    let email = document.contactForm.email.value;
    if (validateRegex(email, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/) == true) {
        document.getElementById("email").className = "form-control is-valid";
        return true;
    } else {
        document.getElementById("email").className = "form-control is-invalid";
        document.getElementById("checkEmail").className = "invalid-feedback";
        document.getElementById("checkEmail").innerHTML = "Debes introducir un email válido";
        return false;
    }
}

function phoneCheck() {
    if (validateRegex(document.contactForm.phone.value, /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/) == true) {
        document.getElementById("phone").className = "form-control is-valid";
        return true;
    } else {
        document.getElementById("phone").className = "form-control is-invalid";
        document.getElementById("checkPhone").className = "invalid-feedback";
        document.getElementById("checkPhone").innerHTML = "Debes introducir un número de teléfono válido";

        return false;
    }
}

function validateMessage() {
    let message = document.contactForm.message.value;
    if (message != "") {
        document.getElementById("message").className = "form-control is-valid";
        return true;
    } else {
        document.getElementById("message").className = "form-control is-invalid";
        document.getElementById("checkMessage").className = "invalid-feedback";
        document.getElementById("checkMessage").innerHTML = "Por favor, escribe un mensaje";
        return false;
    }
}

function validateRegex(field, regex) {
    if ((regex.test(field) == true) && (field != "")) {
        return true
    }
}