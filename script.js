document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('mobile-menu-show');
});

document.addEventListener('click', function (event) {
    const isClickOnMenuIcon = document.getElementById('menu-icon').contains(event.target);

    if (!isClickOnMenuIcon) {
        document.getElementById('mobile-menu').classList.remove('mobile-menu-show');
    }
});
