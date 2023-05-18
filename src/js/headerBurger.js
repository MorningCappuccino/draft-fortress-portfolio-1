const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    // iOS: function () {
    //     return navigator.userAgent.match(/iPhone/iPad/iPod/i);
    // },
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
            // isMobile.iOS() ||
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

const navigationLinks = document.querySelectorAll('.navigation__link[data-goto]');
if (navigationLinks.length > 0) {
    navigationLinks.forEach(navigationLink => {
        navigationLink.addEventListener("click", onNavigationLinkClick);

    });

    function onNavigationLinkClick(e) {
        const navigationLink = e.target;
        if (navigationLink.dataset.goto && document.querySelector(navigationLink.dataset.goto)) {
            const gotoBlock = document.querySelector(navigationLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + 103 - document.querySelector("header").offsetHeight;
            
           if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuNavigation.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}