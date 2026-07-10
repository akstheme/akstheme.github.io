/* ==========================================================
   Academic Portfolio Website
   Main JavaScript File

   Author  : Kuldeep Yadav
   Version : 1.0
========================================================== */

"use strict";

/* ==========================================================
   DOM Ready
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeAOS();

    smoothScrolling();

    highlightActiveNavigation();

    stickyNavbar();

});


/* ==========================================================
   Initialize AOS
========================================================== */

function initializeAOS() {

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1000,

            once: true,

            easing: "ease-in-out"

        });

    }

}


/* ==========================================================
   Smooth Scrolling
========================================================== */

function smoothScrolling() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}


/* ==========================================================
   Active Navigation
========================================================== */

function highlightActiveNavigation() {

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (href === "index.html" && currentPage === "")) {

            link.classList.add("active");

        }

    });

}


/* ==========================================================
   Sticky Navbar
========================================================== */

function stickyNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        }

        else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}


/* ==========================================================
   Scroll To Top

   (Implementation in Phase 2)
========================================================== */

function scrollToTop() {

    // Coming Soon

}


/* ==========================================================
   Counter Animation

   (Homepage Statistics)
========================================================== */

function animateCounters() {

    // Coming Soon

}


/* ==========================================================
   Dark Mode

   (Phase 3)
========================================================== */

function toggleDarkMode() {

    // Coming Soon

}


/* ==========================================================
   Mobile Menu

   (Future Enhancements)
========================================================== */

function mobileMenu() {

    // Coming Soon

}


/* ==========================================================
   Loading Animation

   (Future Enhancements)
========================================================== */

function pageLoader() {

    // Coming Soon

}
