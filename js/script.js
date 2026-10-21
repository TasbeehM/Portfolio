
/* ================= DARK / LIGHT MODE ================= */

const themeToggles = [
    document.getElementById("theme-toggle"),
    document.getElementById("theme-toggle-desktop")
];

function updateThemeIcons() {
    const isDark = document.body.classList.contains("dark-mode");

    themeToggles.forEach(function (button) {
        if (button) {
            button.innerHTML = isDark
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';

            button.setAttribute(
                "aria-label",
                isDark ? "Switch to light mode" : "Switch to dark mode"
            );
        }
    });
}

themeToggles.forEach(function (button) {
    if (button) {
        button.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            updateThemeIcons();
        });
    }
});

updateThemeIcons();


/* ================= TYPING ANIMATION ================= */

const texts = [
    "React Front-End Developer",
    "3 Projects Built",
    "Available for Work"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    const element = document.getElementById("typing-text");

    if (!element) return;

    if (!isDeleting) {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);
}


/* ================= CONTACT FORM - GMAIL ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const myEmail = "Tasbeeh.mahmoud2005@gmail.com";

        const subject = encodeURIComponent(
            "Portfolio Contact - " + name
        );

        const body = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        const gmailURL =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=" + encodeURIComponent(myEmail) +
            "&su=" + subject +
            "&body=" + body;

        window.open(gmailURL, "_blank");
    });
}


/* ================= START TYPING ANIMATION ================= */

typeEffect();
