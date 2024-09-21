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

const fairyCursor = document.getElementById('fairyCursor');
document.addEventListener('mousemove', (e) => {
    fairyCursor.style.left = e.pageX + 'px';
    fairyCursor.style.top = e.pageY + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const toggleThemeButton = document.getElementById('toggleTheme');
    
    // Create stars
    createStars();

    // Theme toggle functionality
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

function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) { // Create 100 stars
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.opacity = Math.random();
        starsContainer.appendChild(star);
    }
}