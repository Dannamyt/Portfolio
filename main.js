// ====NAV BUTTON=====

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    console.log("click");
});

document.addEventListener("mouseup", (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains("open")) {
        navbar.classList.toggle("open");
    }
});
// =====DARK THEME MODE======
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

}

themeButton.onclick = function() {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

}

// =====EMAIL=====

function SendMail() {
    var params = {
        from_name: document.getElementById('fullName').value,
        email_id: document.getElementById('email_id').value,
        message: document.getElementById('message').value
    }

    emailjs.send("service_vwfib1f", "template_5d9v36l", params).then(function(res) {
        alert("Email sent" + res.status)
    })

}

// SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true

})
sr.reveal('.home-title', {})
sr.reveal('.hero', { delay: 400 })
sr.reveal('.button', { delay: 200 })

sr.reveal('.about-img', {})
sr.reveal('.about-text', { delay: 200 })

sr.reveal('.section-title', {})
sr.reveal('.stacks', { delay: 200 })
sr.reveal('.projects', { interval: 200 })
sr.reveal('.contact-input', { interval: 200 })


// sr.reveal('.button', { delay: 200 })