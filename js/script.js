// Collapse navbar when nav item is clicked
let navLink = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        document.getElementById('navbarSupportedContent').classList.remove('show')
    });
}

//Contact form validation
let fullName = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

let submit = document.getElementById('submit');

let regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!fullName.value) {
        fullName.classList.add('error');

        return false;
    } else {
        fullName.classList.remove('error');
    }

    if (!regEx.test(email.value)) {
        email.classList.add('error');

        return false;
    }else {
        email.classList.remove('error');
    }

    if (!message.value) {
        message.classList.add('error');

        return false;
    }else {
        message.classList.remove('error');
    }

    return true

})

