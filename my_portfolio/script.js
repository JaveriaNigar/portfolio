// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Select all nav links and sections
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");
  const hamburger = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".nav-links");

  // Function to hide all sections
  function hideAllSections() {
    sections.forEach(section => {
      section.style.display = "none";
    });
  }

  // Initially show only home
  hideAllSections();
  document.querySelector("#home").style.display = "block";

  // Add click event on nav links
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href"); // e.g. #projects
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        hideAllSections(); // hide all
        targetSection.style.display = "block"; // show clicked section

        // If mobile menu is open, close it
        if (navLinksContainer.classList.contains("active")) {
          navLinksContainer.classList.remove("active");
        }
      }
    });
  });

  // Hamburger toggle for mobile menu
  hamburger.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });
});
