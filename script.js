const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu');

if (iconMenu) {
    iconMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
            console.log(gotoBlockValue)
            // Закрытие при переходе в раздел сайта из бургера
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            console.log(

            )
            window.scrollTo({
                top:gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault() //Отключает работу ссылки
        }
    }
}