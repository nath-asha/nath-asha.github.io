document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const toggleThemeButton = document.getElementById('toggleTheme');
    createStars();

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', function() {
            const isGalaxyTheme = document.body.classList.toggle('galaxy-theme');
            document.getElementById('stars').style.display = isGalaxyTheme ? 'block' : 'none';
            localStorage.setItem('theme', isGalaxyTheme ? 'galaxy' : 'default');
        });
    }

    // Check localStorage for saved theme
    if (localStorage.getItem('theme') === 'galaxy') {
        document.body.classList.add('galaxy-theme');
        document.getElementById('stars').style.display = 'block';
    } else {
        document.getElementById('stars').style.display = 'none';
    }

    // Set active link in navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
