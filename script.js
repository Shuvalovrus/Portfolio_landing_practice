const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu');
if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}