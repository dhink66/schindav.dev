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
    document.querySelector("h1").innerText =
      "Dobrý den, jmenuji se David Schinkmann";
    document.querySelector(".welcome").innerText =
      "vítejte v mém světě softwaru.";
    document.querySelector(".journey").innerText =
      "Něco málo o mé cestě. Začal jsem jako grafik v realitách a pak jsem našel kód. Od té doby navrhuji různé webové stránky, aplikace a užitečné pomocníky. Například:";
    document.querySelector(".link").innerText = "inkOT studio";
    document.querySelector(".game").innerText = "prvních 100 hra";
    document.querySelector(".hobby").innerText =
      "Velkou část mého času tvoří také sport, hlavně cvičení v posilovně a na hrazdách, jízda na horském kole nebo turistika. Krom toho rád čtu nebo cestuji s přáteli.";
    document.querySelector(
      ".insides"
    ).innerHTML = `Pokud se chcete podívat na detaily některých projektů nebo jen koncepty, zde je můj
      <a class="link" href="https://github.com/davidhink">Github</a> nebo
      <a class="link" href="#">Dribbble</a>. Také mě můžete kontaktovat mailem :
      <a class="link" href="mailto:david.schinkmann@gmail.com"
        >david.schinkmann@gmail.com</a
      >`;

    // cz část
  } else if (langCode === "en") {
    document.querySelector("h1").innerText = "Hi, i am David Schinkmann";
    document.querySelector(".welcome").innerText =
      "welcome in my world of software engineering.";
    document.querySelector(".journey").innerText =
      "Little bit about my journey, started as a graphic designer and than i found code. Since than i been designing different apps webs or any kinda helpers. For example:";
    document.querySelector(".link").innerText = "inkOT Website";
    document.querySelector(".game").innerText = "first 100 Game";
    document.querySelector(".hobby").innerText =
      " Big part of my time are also sports, mainly caliesthetics, mountain biking or just hiking. Other than that i enjoy reading or traveling with friends.";
    document.querySelector(
      ".insides"
    ).innerHTML = `If you want to look at the insides, mainly on
    <a class="link" href="https://github.com/davidhink">Github</a> or
    <a class="link" href="#">Dribbble</a>, or you can reach me via email on
    :
    <a class="link" href="mailto:david.schinkmann@gmail.com"
      >david.schinkmann@gmail.com</a
    >`;
    // en část
  }
}
