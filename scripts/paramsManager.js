// Récupération des paramètres dans l'URL
const urlString = window.location.search;
console.log(urlString);

// Triage des paramètres
const urlParams = new URLSearchParams(urlString);

// Langue du site
lang = getCookie("lang");
console.log(lang);
if(lang == null){ lang = "FR";}


// Page demandée
const loadedPage = urlParams.get('page');