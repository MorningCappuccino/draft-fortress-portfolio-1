;(function() {
    const form = document.getElementById('getInTouchForm');
    const sendButton = document.querySelector('.mySkills__button');
    const successfulElement = document.querySelector(".getInTouch__successful");
    const successfulCircle = document.querySelector(".getInTouch__successful-circle");

    // sendButton.addEventListener('click', (ev) => sendForm(ev));
    form.addEventListener('submit', (ev) => sendForm(ev));

    //TODO: form validation
    function sendForm(ev) {
        console.log("ev" + ev.preventDefault)
        ev.preventDefault();
        // the file send_email.php should be placed in the root of server
        fetch('/send_email.php', {
            method: 'POST',
            body: new FormData(form)
        }).then(res => {
            if (res.status == 200) {
                fireSuccessfulState();
                setTimeout(killSucessfulState, 5000);
            }
        })

        // fetch('https://httpstat.us/200').then(res => {
        //     if (res.status == 200) {
        //         fireSuccessfulState();
        //         setTimeout(killSucessfulState, 5000);
        //     }
        // })
    }

    function fireSuccessfulState() {
        successfulElement.classList.add('active', 'activeD');
        successfulCircle.classList.add('markD');
    }

    function killSucessfulState() {
        successfulElement.classList.remove('activeD');
        successfulCircle.classList.remove('markD');
        successfulElement.classList.add('de-activeD');
        successfulCircle.classList.add('de-markD');

        setTimeout(() => {
            successfulElement.classList.remove('active');
        }, 1000);
    }
})();