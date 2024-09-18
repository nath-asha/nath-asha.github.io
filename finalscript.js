
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('galaxy-theme');
    localStorage.setItem('theme', document.body.classList.contains('galaxy-theme') ? 'galaxy' : 'default');
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('theme') === 'galaxy') {
        document.body.classList.add('galaxy-theme');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('galaxy-theme');
    localStorage.setItem('theme', document.body.classList.contains('galaxy-theme') ? 'galaxy' : 'default');
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('theme') === 'galaxy') {
        document.body.classList.add('galaxy-theme');
    }
});

