const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },

    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },

    iOS: function () {
        if (typeof window === `undefined` || typeof navigator === `undefined`) return false;

        return /iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || (window.opera && opera.toString() === `[object Opera]`));
    },

    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },

    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

// меню бургер
const iconMenu = document.querySelector('.header__icon');
const menuNavigation = document.querySelector('.navigation');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuNavigation.classList.toggle('_active');
    });

}

//прокрутка при клике

document.querySelectorAll('a[href^="#about-us,#ourSkills,#getInTouch" ').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


     const menuNavigationLinks = document.querySelector('.navigation');
    if (menuNavigationLinks) {

        menuNavigationLinks.addEventListener("click", function (e) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuNavigation.classList.remove('_active');
        });  
    }
