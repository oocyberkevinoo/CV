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
		if(element == "softwares"){
			document.getElementById("menu-"+lang+element).innerHTML= "<a href='./?page=software/index'>- Présentation Globale</a>"+
		"<a href='./?page=software/1'>- jeu 1</a>"+
		"<a href='./?page=software/2'>- jeu 2</a>"+
		"<a href='./?page=software/3'>- jeu 3</a>";
		}	
		if(element == "games"){
			document.getElementById("menu-"+lang+element).innerHTML= "<a href='./?page=game/index'>- Présentation Globale</a>"+
		"<a href='./?page=game/1'>- jeu 1</a>"+
		"<a href='./?page=game/2'>- jeu 2</a>"+
		"<a href='./?page=game/3'>- jeu 3</a>";
		}	
		if(element == "vrar"){
			document.getElementById("menu-"+lang+element).innerHTML= "<a href='./?page=vrar/index'>- Présentation Globale</a>"+
		"<a href='./?page=vrar/1'>- jeu 1</a>"+
		"<a href='./?page=vrar/2'>- jeu 2</a>"+
		"<a href='./?page=vrar/3'>- jeu 3</a>";
		}	
		if(element == "hardwares"){
			document.getElementById("menu-"+lang+element).innerHTML= "<a href='./?page=hardware/index'>- Présentation Globale</a>"+
		"<a href='./?page=hardware/1'>- jeu 1</a>"+
		"<a href='./?page=hardware/2'>- jeu 2</a>"+
		"<a href='./?page=hardware/3'>- jeu 3</a>";
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