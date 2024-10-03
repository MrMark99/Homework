const validator = new window.JustValidate('#form');
const {form} = document.forms;

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