"use strict";

const navToggler = document.querySelector(".nav-toggler");
const menu = document.querySelector(".nav-list");
const modal = document.querySelector(".modal");
const modalOpener = document.querySelector("#modal-opener");
const modalCloser = document.querySelector(".modal-icon");
const modalCards = document.querySelectorAll(".modal .card-outline");
const modalBody = document.querySelector(".modal-card");
const modalBtns = document.querySelectorAll(".modal-btn");
const modalOne = document.querySelector(".modal-card--1");
const modalTwo = document.querySelector(".modal-card--2");
const modalTwoCloser = document.querySelector(".modal-closer-2");

// Mobile menu handler
navToggler.addEventListener("click", () => {
    menu.classList.toggle("show");
    [...navToggler.querySelectorAll("img")].forEach((img) => img.classList.toggle("show"));
});
// Modal Opener
modalOpener.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show-modal");
});
// Modal Closer
modalCloser.addEventListener("click", (e) => {
    modal.classList.remove("show-modal");
});

// Modal Cards
const resetModalCards = () => {
    [...modalCards].forEach((card) => card.classList.remove("active-card"));
};
[...modalCards].forEach((card) => {
    card.addEventListener("click", (e) => {
        //  Remove the active class from the siblings
        resetModalCards();
        const targetCard = e.target.closest(".card-outline");
        if (!targetCard.classList.contains("out-of-stock")) {
            targetCard.classList.add("active-card");
        }
    });
    if (!card);
});

[...modalBtns].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        modalOne.classList.remove("show-modal");
        modalTwo.classList.add("show-modal");
    });
});
modalTwoCloser.addEventListener("click", () => {
    modalOne.classList.add("show-modal");
    modalTwo.classList.remove("show-modal");
    modal.classList.remove("show-modal");
    resetModalCards();
});
