const validator = new window.JustValidate('#form');
const {form} = document.forms;
const passwordInput1 = document.getElementById('password');
const togglePasswordButton1 = document.getElementById('togglePassword1');

togglePasswordButton1.addEventListener('click', () => {

    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text';}
    else {
        passwordInput1.type = 'password';
    }
})

const passwordInput2 = document.getElementById('confirmPassword');
const togglePasswordButton2 = document.getElementById('togglePassword2');

togglePasswordButton2.addEventListener('click', () => {

    if (passwordInput2.type === 'password') {
        passwordInput2.type = 'text';}
    else {
        passwordInput2.type = 'password';
    }
})

function formValue() {
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
}
let validation = new JustValidate("#form");
validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: "Enter your name",
    },
    {
        rule: "minLength",
        errorMessage: "min length is 2",
        value: 2,
    }
])
validation.addField('#email', [
    {
        rule: 'required',
        errorMessage: "Enter your email",
    },
    {
        rule: "minLength",
        errorMessage: "min length is 2",
        value: 2,
    }
])
validation.addField('#password', [
    {
        rule: 'required',
        errorMessage: "Enter your password",
    },
    {
        rule: "minLength",
        errorMessage: "min length is 2",
        value: 2,
    }
])
validation.addField('#confirmPassword', [
    {
        rule: 'required',
        errorMessage: "Confirm password",
    },
    {
        rule: "minLength",
        errorMessage: "min length is 2",
        value: 2,
    }
])
validation.addField('#tel', [
    {
        rule: 'required',
        errorMessage: "Enter ur phone number",
    },
    {
        rule: "minLength",
        errorMessage: "min length is 2",
        value: 2,
    }
])