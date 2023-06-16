;(function() {
    const form = document.getElementById('getInTouchForm');
    const sendButton = document.querySelector('.mySkills__button');

    sendButton.addEventListener('click', sendForm);

    //TODO: form validation
    function sendForm() {
        // the file send_email.php should be placed in the root of server
        fetch('/send_email.php', {
            method: 'POST',
            body: new FormData(form)
        })
    }
})();