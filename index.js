"use strict";
// date updating
function updateDate() {
  let dateParagraph = document.getElementById("date"); // Get the <p> element
  let currentDate = new Date(); // Get the current date/time
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
  let year = currentDate.getFullYear();
  let formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;
  dateParagraph.textContent = formattedDate;
  dateParagraph.style.fontSize = "14px";
  setTimeout(updateDate, 1000);
}
updateDate();
