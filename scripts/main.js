// scroll to contact section (voor elke browser)
document.querySelector('.appointment-button')
    .addEventListener('click', function() {
        const contactSection = document.getElementsByClassName('contact')[0];
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

   

    // let button = document.querySelector('.ai-design-sprint-card-button');
    // let card = document.querySelector('.ai-design-sprint-card');
    
    // button.addEventListener('click', showCard);
    
    // function showCard() {
    //   card.classList.toggle('show');
    //   console.log('show card');
    // }
   