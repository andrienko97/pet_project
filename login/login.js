(function (window) {
    function getElementById(elementId) {
        return window.document.getElementById(elementId);
    }

    function doLogin() {
        if (userName.value === '' || password.value === '') {
            alert('login or password cannot be empty');
            return;
        }

        if (userName.value === 'lesha' && password.value === '123456') {
            alert('correct login');
        } else {
            alert('incorrect login');
        }
    }

    function pressEnter(event) {
        if (event.keyCode === 13) {
            doLogin();
        };
    }

    const userName = getElementById('login-user-name');
    const password = getElementById('login-password');
    const submitBtn = getElementById('login-submit-btn');

    submitBtn.addEventListener('click', doLogin);

    [userName, password].forEach(function (input) {
        input.addEventListener('keydown', pressEnter);
    })
}(window))