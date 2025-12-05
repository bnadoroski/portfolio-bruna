document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('mobile-menu-show');
});

document.addEventListener('click', function (event) {
    const isClickOnMenuIcon = document.getElementById('menu-icon').contains(event.target);

    if (!isClickOnMenuIcon) {
        document.getElementById('mobile-menu').classList.remove('mobile-menu-show');
    }
});

const translation = await fetch('lang.json').then(res => res.json());
const userLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
setActiveLang(userLang);

document.querySelectorAll('.btn-lang').forEach(button => {
    button.addEventListener('click', function () {
        const selectedLang = this.classList.contains('btn-pt') ? 'pt' : 'en';
        setActiveLang(selectedLang);
    });
})

function setActiveLang(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translation[lang][key];
    });

    document.querySelectorAll('.btn-lang').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll(`.btn-lang.btn-${lang}`).forEach(btn => {
        btn.classList.add('active');
    });
}