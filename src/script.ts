var toggleDarkMode = function () {
    var html = document.documentElement;
    html.classList.toggle('dark');
};
document
    .getElementById('toggle-button')
    .addEventListener('click', toggleDarkMode);
