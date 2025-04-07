// function sendToWhatsapp(){
//     let number = "+918779472177"; 
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;
//     let url = "https://wa.me/" + number + "?text="
//     + "Name: " + name + "%0a"
//     + "Email: " + email + "%0a"
//     + "Message: " + message+ "%0a50a";

//     window.open(url, "_blank").focus();

// }
// const hamburger = document.querySelector('.hamburger');
// const navbar = document.querySelector('.navbar');

// hamburger.addEventListener('click', () => {
//     navbar.classList.toggle('active'); // Add/remove 'active' class
// });


const hamburger = document.querySelector('.hamburger');
const mobileNavList = document.querySelector('.mobile-nav-list');

hamburger.addEventListener('click', () => {
    mobileNavList.classList.toggle('open');
    hamburger.classList.toggle('active'); // Optional: Add animation to hamburger
});

// Optional: Close mobile menu when a link is clicked
mobileNavList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNavList.classList.remove('open');
        hamburger.classList.remove('active');
    });
});

// Optional: Add a simple fade-in animation on load for service cards
const serviceCards = document.querySelectorAll('.service-card');

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2 // Trigger when 20% of the element is visible
});

serviceCards.forEach(card => {
    card.classList.add('fade-in-hidden'); // Initial hidden state
    observer.observe(card);
});