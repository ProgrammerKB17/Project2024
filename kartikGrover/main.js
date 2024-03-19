document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message'),
          contactUser = document.getElementById('contact-user');
  
    const sendEmail = (e) => {
      e.preventDefault();
      if (contactUser.value === '') {
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');
        contactMessage.textContent = 'You must enter your email';
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 3000);
      } else {
        emailjs.sendForm('service_p8r0mq9', 'template_hm5pl8r', '#contact-form', 'ijbx-SHa8ajdivmye')
          .then(() => {
            contactMessage.classList.add('color-green');
            contactMessage.textContent = 'You registered successfully';
            setTimeout(() => {
              contactMessage.textContent = '';
            }, 3000);
          }, (error) => {
            alert('Oops! Something went wrong', error);
          });
      }
    };
  
    contactForm.addEventListener('submit', sendEmail);
  });