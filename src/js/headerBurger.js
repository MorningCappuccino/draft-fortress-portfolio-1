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

const navigationLinks = document.querySelectorAll('.navigation__link');
if (navigationLinks.length > 0) {
    navigationLinks.forEach(navigationLink => {
        navigationLink.addEventListener("click", onNavigationLinkClick);

    });

    function onNavigationLinkClick(e) {
        const navigationLink = e.target;
        const hrefBlock = document.querySelector(navigationLink.href);
       
            window.scrollTo({
                top: hrefBlock,
                behavior: "smooth"
            });
            e.preventDefault();
        }

        const menuNavigationLinks = document.querySelector('.navigation');
    if (menuNavigationLinks) {

    menuNavigationLinks.addEventListener("click", function (e) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuNavigation.classList.remove('_active');
    });

         
    }
}