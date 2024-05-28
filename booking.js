"use strict";

// Anger dagens datum som standard under "Boka resa"
let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

let today = year + "-" + month + "-" + day;       
document.getElementById("date-to-leave").value = today;


// Anger standard för första lediga tid under "Boka resa"
let hour = date.getHours() + 1;

if (hour < 10) hour = "0" + hour;

let time = hour + ":" + "00";
document.getElementById("time-to-leave").value = time;