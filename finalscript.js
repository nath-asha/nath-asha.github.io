document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const toggleThemeButton = document.getElementById('toggleTheme');

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', function() {
            document.body.classList.toggle('galaxy-theme');
            localStorage.setItem('theme', document.body.classList.contains('galaxy-theme') ? 'galaxy' : 'default');
        });
    }

    if (localStorage.getItem('theme') === 'galaxy') {
        document.body.classList.add('galaxy-theme');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
