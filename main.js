"use strict";

// Lagrar menyknapparna i variabler
let openBtn = document.getElementById("open-menu-btn");
let closeBtn = document.getElementById("close-menu-btn");

// Adderar händelselyssnare som reagerar på klick
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Lagrar navigeringsmenyn i en variabel
let navMenuEl = document.getElementById("nav-menu");

// Öppnar navigeringsmeny
function openMenu() {

    // Ändrar CSS från dold till synlig
    navMenuEl.style.display = "block";

    // Ändrar WAI-ARIA på öppna meny-knappen
    openBtn.setAttribute("aria-expanded", "true");
}

// Stänger navigeringsmeny
function closeMenu() {

    // Ändrar CSS från synlig till dold
    navMenuEl.style.display = "none";

    // Ändrar WAI-ARIA på öppna meny-knappen
    openBtn.setAttribute("aria-expanded", "false");
}

// Funktion för att lägga till/ta bort återresa på sidan Boka resa/Ändra resa
function toggleBtn() {

    // Lagrar element i variabler
    let toggleTripBtn = document.getElementById("toggle-return-text");
    let tripBack = document.getElementById("trip-back");

    //Ändrar CSS och WAI-ARIA beroende på om återresa visas eller inte
    if (tripBack.style.display === "none") {
        tripBack.style.display = "block";
        toggleTripBtn.setAttribute("aria-expanded", "true");
        toggleTripBtn.innerHTML = "- Ta bort återresa";
    } else {
        tripBack.style.display = "none";
        toggleTripBtn.setAttribute("aria-expanded", "false");
        toggleTripBtn.innerHTML = "+ Lägg till återresa";
    }
}