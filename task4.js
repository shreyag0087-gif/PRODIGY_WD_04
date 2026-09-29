const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const navItems = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const isOpen =
        navLinks.classList.contains("open");

    menuBtn.setAttribute(
        "aria-expanded",
        isOpen
    );

});

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

const header =
    document.getElementById("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const sections =
    document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 130;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveLink
);

window.addEventListener(
    "load",
    updateActiveLink
);

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );

revealElements.forEach(function (element) {

    observer.observe(element);

});

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const message =
            document
                .getElementById("message")
                .value
                .trim();

        if (
            !name ||
            !email ||
            !message
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.style.color =
                "#dc2626";

            return;

        }

        formMessage.textContent =
            "Thank you! Your message has been received.";

        formMessage.style.color =
            "#16a34a";

        contactForm.reset();

    }
);

document.getElementById("year").textContent =
    new Date().getFullYear();

