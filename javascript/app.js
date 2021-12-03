"use strict";

//Declare all required variables
const copyright = document.querySelector(".copyright");

//Automatically get the current year
const presentYear = new Date().getFullYear();

//Render content to the frontend
copyright.textContent = `© ${presentYear} Folarin Akinloye | All rights reserved.`;

