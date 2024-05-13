const menu_btn = document.querySelector('.hamburger');

const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click' , function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply the saved theme, if any
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        toggle.checked = currentTheme === 'dark-theme';
    }

    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle-mob');
    const currentTheme = localStorage.getItem('theme');

    // Apply the saved theme, if any
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        toggle.checked = currentTheme === 'dark-theme';
    }

    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});






