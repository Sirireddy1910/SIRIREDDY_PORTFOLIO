// ==========================================
// Portfolio JavaScript
// DESIREDDY SIRIREDDY
// ==========================================

// ===============================
// Typing Animation
// ===============================

const typingElement = document.getElementById("typing");

const roles = [
    "Software Developer",
    "Java Developer",
    "Full Stack Developer",
    "Generative AI Enthusiast",
    "MongoDB Certified Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ===============================
// Theme Toggle
// ===============================

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    if (themeToggle)
        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

}

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("open");

});

// Close menu after click

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Active Navbar Link
// ===============================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (pageYOffset >= top &&
            pageYOffset < top + height) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href")
            === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Navbar Background
// ===============================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// ===============================
// Scroll Progress Bar
// ===============================

const progress =
document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const progressHeight =
    (window.scrollY / totalHeight) * 100;

    if(progress){

        progress.style.width =
        progressHeight + "%";

    }

});

// ===============================
// Back To Top
// ===============================

const backBtn =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backBtn.style.display="flex";

    }else{

        backBtn.style.display="none";

    }

});

backBtn?.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements =
document.querySelectorAll(

".hero, .about, .skills, .projects, .experience, .certifications, .achievements, .contact"

);

const reveal = () => {

    revealElements.forEach(el=>{

        const windowHeight =
        window.innerHeight;

        const top =
        el.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

// ===============================
// Contact Form
// ===============================

const form = document.getElementById("contact-form");

form?.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitBtn = form.querySelector("button");

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    emailjs.sendForm(

        "service_gr56afv",

        "template_qzf7vq8",

        this

    )

    .then(() => {

        alert("✅ Message sent successfully!");

        form.reset();

    })

    .catch((error) => {

        console.error(error);

        alert("❌ Failed to send message.");

    })

    .finally(() => {

        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";

    });

});

// ===============================
// Console Message
// ===============================

console.log(

"%cWelcome to DESIREDDY SIRIREDDY's Portfolio 🚀",

"color:#6C63FF;font-size:18px;font-weight:bold;"

);