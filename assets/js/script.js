/* RMIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023B
Assessment: Assignment 1
Author: Duong Viet Hoang
ID: S3962514 */

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-btn");
    const navMenu = document.querySelector(".header-content");

    hamburger.addEventListener("click", function(event) {
        navMenu.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});
