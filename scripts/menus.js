function toggleMenu(element){
	
	val = getCookie("menu-"+lang+element);
	if(val == "true"){
		setCookie("menu-"+lang+element, false, 366);
	}
	else if(val == "" || val == "false"){
		setCookie("menu-"+lang+element, true, 366);
	}
	showMenu(element);
	
}

function showMenu(element){
	lang = getCookie("lang");
	val = getCookie("menu-"+lang+element);

	
	if(val == "true"){
		if(lang == "FR"){
			
			switch(element){
				case "softwares":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d2'><a href='./?page=software/index'>- Présentation Globale</a>"+
				"<a href='./?page=software/1'>- Editeur de musiques (Project Diva)</a>"+
				"<a href='./?page=software/2'>- Convertisseur de format (Groove Coaster)</a>"+
				"<a href='./?page=software/3'>- Génération de niveaux (Beat Saber / PPD)</a>"+
				"<a href='./?page=software/4'>- Sonic Randomizer</a></div>";
				break;
				case "games":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d2'><a href='./?page=game/index'>- Présentation Globale</a>"+
				"<a href='./?page=game/1'>- jeu 1</a>"+
				"<a href='./?page=game/2'>- jeu 2</a>"+
				"<a href='./?page=game/3'>- jeu 3</a></div>";
				break;
				case "vrar":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d2'><a href='./?page=vrar/index'>- Présentation Globale</a>"+
				"<a href='./?page=vrar/1'>- Hologram VR Show</a>"+
				"<a href='./?page=vrar/2'>- Prototypes HandTracking</a>"+
				"<a href='./?page=vrar/3'>- Prototype Multijoueur à un casque VR</a></div>";
				break;
				case "hardwares":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d2'><a href='./?page=hardware/1'>- Controlleur Arcade ARDUINO</a></div>";
				break;
			}
		}
		else if(lang == "EN"){
			
			switch(element){
				case "softwares":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d2'><a href='./?page=software/index'>- Global Presentation</a>"+
				"<a href='./?page=software/1'>- game 1</a>"+
				"<a href='./?page=software/2'>- game 2</a>"+
				"<a href='./?page=software/3'>- game 3</a></div>";
				break;
				case "games":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d2'><a href='./?page=game/index'>- Global Presentation</a>"+
				"<a href='./?page=game/1'>- game 1</a>"+
				"<a href='./?page=game/2'>- game 2</a>"+
				"<a href='./?page=game/3'>- game 3</a></div>";
				break;
				case "vrar":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d2'><a href='./?page=vrar/index'>- Global Presentation</a>"+
				"<a href='./?page=vrar/1'>- game 1</a>"+
				"<a href='./?page=vrar/2'>- game 2</a>"+
				"<a href='./?page=vrar/3'>- game 3</a></div>";
				break;
				case "hardwares":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d2'><a href='./?page=hardware/index'>- Global Presentation</a>"+
				"<a href='./?page=hardware/1'>- game 1</a>"+
				"<a href='./?page=hardware/2'>- game 2</a>"+
				"<a href='./?page=hardware/3'>- game 3</a></div>";
				break;
			}
		}
	}
	else if(val == "" || val == "false" || val == null)
			document.getElementById("menu-"+lang+element).innerHTML="";

	
}

function createLang(){
	lang = getCookie("lang");
	if(lang != "FR" && lang != "EN")	setCookie("lang", "FR", 366);
}

function updateLang(lang){
	setCookie("lang", lang, 366);
	location.reload();
}

function showLang(){
	lang = getCookie("lang");
	if(lang == "EN")
	document.getElementById("menuFR").innerHTML="";
else
	document.getElementById("menuEN").innerHTML="";
}