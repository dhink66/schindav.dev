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

function changeLang(langCode) {
  if (langCode === "cz") {
    document.querySelector("h1").innerText = "Ahoj👋🏽, já jsem David";
    document.querySelector(".welcome").innerText =
      "vítej v mém světě softwaru.";
    document.querySelector(".journey").innerText =
      "Něco málo o mé cestě. Začal jsem jako grafik v realitách a pak jsem našel kód. Od té doby navrhuji různé weby, aplikace a užitečné pomocníky. Například:";
    document.querySelector(".link").innerText = "PujcMoto web";
    document.querySelector(".game").innerText = "100 hra";
    document.querySelector(".hobby").innerText =
      "Velkou část mého času tvoří také sport, převážně cvičení s vlastní vahou, jízda na kole nebo turistika. Krom toho rád čtu nebo cestuji s přáteli.";
    document.querySelector(
      ".insides"
    ).innerHTML = `Více mé tvorby je k dispozici na
      <a class="link" href="https://github.com/dhink66" target="_blank">Githubu (kód)</a> nebo
      <a class="link" href="https://dribbble.com/davhink" target="_blank">Dribbblu (grafika)</a>. Pro jakékoliv info mail :
      <a class="link" href="mailto:david.schinkmann@gmail.com"
        >david.schinkmann@gmail.com</a
      >`;

    // cz část
  } else if (langCode === "en") {
    document.querySelector("h1").innerText = "Hi 👋🏽, i am David";
    document.querySelector(".welcome").innerText =
      "welcome in my world of software engineering.";
    document.querySelector(".journey").innerText =
      "Little bit about my journey. Started as a graphic designer in real estate and than i found code. Since than i have been designing different applications, websites or any kinda useful helpers. For example:";
    document.querySelector(".link").innerText = "PujcMoto website";
    document.querySelector(".game").innerText = "100 Game";
    document.querySelector(".hobby").innerText =
      " Big part of my time are also sports, mainly caliesthetics, mountain biking or just hiking. Other than that i enjoy reading or traveling with friends.";
    document.querySelector(
      ".insides"
    ).innerHTML = `If you want to look at more details, mainly on
    <a class="link" href="https://github.com/dhink66" target="_blank">Github (code)</a> or
    <a class="link" href="https://dribbble.com/davhink" target="_blank">Dribbble (graphics)</a>, or you can reach me via email on
    :
    <a class="link" href="mailto:david.schinkmann@gmail.com"
      >david.schinkmann@gmail.com</a
    >`;
    // en část
  }
}
