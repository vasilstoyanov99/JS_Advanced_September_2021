function validate() {
    const emailInputElement = document.getElementById('email');
    emailInputElement.addEventListener('change', validateEmail);
    const regex = new RegExp(/^[a-z]+@[a-z]+\.[a-z]+$/);

    function validateEmail(ev) {
        if (!regex[Symbol.match](ev.target.value)){
            emailInputElement.classList.add('error');
        } else {
            emailInputElement.classList.remove('error');
        }
    }
}