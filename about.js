
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));

            // Check if the href is an internal link (starts with '#')
            if (target && this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Otherwise, allow the default behavior for external links
        });
    });
});
