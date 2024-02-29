// scroll to contact section (voor elke browser)
document.querySelector('.appointment-button')
    .addEventListener('click', function() {
        const contactSection = document.getElementsByClassName('contact')[0];
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

