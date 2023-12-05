function initialize() {
  const MOBILE_TOGGLE = document.querySelector('.nav-toggle');
  MOBILE_TOGGLE.addEventListener('click', toggleMobileNav);

  const FORM_SELECT = document.getElementById('form');
  FORM_SELECT.addEventListener('submit', formValidation);
}

function toggleMobileNav() {
  var mobileNav = document.querySelector('.navbar-mobile-links');
  var currentMaxHeight = mobileNav.style.maxHeight;

  if (currentMaxHeight === '0px' || !currentMaxHeight) {
    mobileNav.style.maxHeight = '30000px';
    mobileNav.style.paddingBottom = '5px';
  } else {
    mobileNav.style.maxHeight = '0';
  }
}

function formValidation(event) {
  event.preventDefault();

  const errorMessages = document.getElementsByClassName('error-message');
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].style.visibility = 'hidden';
  }

  const NAME = event.target.name.value;
  const EMAIL = event.target.email.value;
  const NUMBER = event.target.number.value;
  const ADDRESS = event.target.address.value;

  const errorsToShow = [];

  if (NAME === '') {
    errorsToShow.push('error-name');
  }

  if (EMAIL === '') {
    errorsToShow.push('error-email');
  }

  if (NUMBER === '') {
    errorsToShow.push('error-number');
  }

  if (ADDRESS === '') {
    errorsToShow.push('error-address');
  }

  for (const errorId of errorsToShow) {
    document.getElementById(errorId).style.visibility = 'visible';
  }

  if (errorsToShow.length === 0) {
    const FORM_DATA = {
      name: NAME,
      email: EMAIL,
      number: NUMBER,
      address: ADDRESS,
    };

    const FORM_DATA_JSON = JSON.stringify(FORM_DATA);
    localStorage.setItem('FORM_DATA', FORM_DATA_JSON);
  }
}

initialize();

// Scroll to top

const scrollToTopElement = document.getElementById('scroll-to-top');

scrollToTopElement.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
