//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// changing header on scroll


//automatically runs function, adds classes to the header
(function () { 
	
	//screen has max-width of 1000px
	if (window.matchMedia('screen and (max-width: 1000px)').matches) {
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('fff');
		document.querySelector('header div:last-of-type a').classList.add('ooo');
		document.querySelector('header div:first-of-type svg').classList.add('fffFill');
		document.querySelector('header div:last-of-type').classList.add('fffBg');
		document.querySelector('header details summary span').classList.add('fffBg');
	}
	else {
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('fff');
		document.querySelector('header div:last-of-type a').classList.add('fff');
		document.querySelector('header div:first-of-type svg').classList.add('fffFill');
		document.querySelector('header div:last-of-type').classList.add('oooBg');
		document.querySelector('header details summary span').classList.add('fffBg');
	}
}());


//automatically reloads page after scaling the browser
(function () { 
	
	//screen has min-width of 376px
	if (window.matchMedia('screen and (min-width: 376px)').matches) {
		window.onresize = function() {location.reload();} 
	}
}());



//-(all elements)-
window.addEventListener('scroll', ()=> {

	//page is scrolled and screen has a max width of 1000px
	if (window.pageYOffset > 50 && window.matchMedia('screen and (max-width: 1000px)').matches) {
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.remove('ooo');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.remove('ooo');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.remove('ooo');

		document.querySelector('header').classList.remove('transparent');
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.remove('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.remove('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.remove('fff');
		document.querySelector('header div:first-of-type svg').classList.remove('fffFill');	
		document.querySelector('header details summary span').classList.remove('fffBg');

		document.querySelector('header').classList.add('fffTransparent');
		document.querySelector('header div:first-of-type svg').classList.add('oooFill');
		document.querySelector('header details summary span').classList.add('oooBg');
	}

	//page is scrolled 
	else if (window.pageYOffset > 50) {
		document.querySelector('header').classList.remove('transparent');
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.remove('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.remove('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.remove('fff');
		document.querySelector('header div:first-of-type svg').classList.remove('fffFill');
		document.querySelector('header details summary span').classList.remove('fffBg');
		document.querySelector('header details summary span').classList.remove('oooBg');

		document.querySelector('header').classList.add('fffTransparent');
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('ooo');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('ooo');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('ooo');
		document.querySelector('header div:first-of-type svg').classList.add('oooFill');
	}

	else {
		document.querySelector('header').classList.remove('fffTransparent');
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.remove('ooo');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.remove('ooo');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.remove('ooo');
		document.querySelector('header div:first-of-type svg').classList.remove('oooFill');
		document.querySelector('header details summary span').classList.remove('oooBg');

		document.querySelector('header').classList.add('transparent');
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('fff');
		document.querySelector('header div:first-of-type svg').classList.add('fffFill');	
		document.querySelector('header details summary span').classList.add('fffBg');
	}
});

//-(shopping cart element)-
window.addEventListener('scroll', ()=> { 

	//page is scrolled and screen has a max width of 1000px
	if (window.pageYOffset > 50 && window.matchMedia('screen and (max-width: 1000px)').matches) {
		document.querySelector('header div:last-of-type a').classList.remove('ooo');
		document.querySelector('header div:last-of-type a').classList.add('fff');
		document.querySelector('header div:last-of-type').classList.remove('fffBg');
		document.querySelector('header div:last-of-type').classList.add('oooBg');
	}

	//page is scrolled
	else if (window.pageYOffset > 50) {
		document.querySelector('header div:last-of-type a').classList.remove('ooo');
		document.querySelector('header div:last-of-type a').classList.add('fff');
		document.querySelector('header div:last-of-type').classList.remove('fffBg');
		document.querySelector('header div:last-of-type').classList.add('oooBg');
	}

	//screen has a max width of 1000px
	else if (window.matchMedia('screen and (max-width: 1000px)').matches){
		document.querySelector('header div:last-of-type a').classList.remove('fff');
		document.querySelector('header div:last-of-type a').classList.add('ooo');
		document.querySelector('header div:last-of-type').classList.remove('oooBg');
		document.querySelector('header div:last-of-type').classList.add('fffBg');
	}

	else {
		document.querySelector('header div:last-of-type a').classList.remove('ooo');
		document.querySelector('header div:last-of-type a').classList.add('fff');
		document.querySelector('header div:last-of-type').classList.remove('fffBg');
		document.querySelector('header div:last-of-type').classList.add('oooBg');
	}
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// shoe product sliders (index.html --> 3rd section)


//-(1st product)----------------------------------------------------------------------------------
var slider1 = document.querySelector('main section:nth-child(3) div:first-of-type img');
var sliderFotos1 = ['shoe1slider1.png', 'shoe1slider2.png', 'shoe1slider3.png', 'shoe1slider4.png', 'shoe1slider5.png', 'shoe1slider6.png'];
var vooruitKnop1 = document.querySelector('main section:nth-child(3) div:first-of-type button:first-of-type');
var terugKnop1 = document.querySelector('main section:nth-child(3) div:first-of-type button:last-of-type');

var onePaginaNr = 0;
onelaatFotoZien();	

function onelaatFotoZien() {
	if (onePaginaNr > sliderFotos1.length -1) { //paginaNr > laatste foto? 
		onePaginaNr = 0; //dan terug naar begin
	}
	if (onePaginaNr < 0) { //paginaNr < eerste foto?
		onePaginaNr = sliderFotos1.length -1; //dan terug naar einde
	}
	slider1.src = 'images/' + sliderFotos1[onePaginaNr];
}

vooruitKnop1.addEventListener('click', ()=> {
    onePaginaNr = onePaginaNr + 1 ;
	onelaatFotoZien();
} );
terugKnop1.addEventListener('click', ()=> {
    onePaginaNr = onePaginaNr - 1 ;
	onelaatFotoZien();
} );


//-(2nd product)----------------------------------------------------------------------------------
var slider2 = document.querySelector('main section:nth-child(3) div:nth-child(3) img');
var sliderFotos2 = ['shoe2slider1.png', 'shoe2slider2.png', 'shoe2slider3.png', 'shoe2slider4.png', 'shoe2slider5.png'];
var vooruitKnop2 = document.querySelector('main section:nth-child(3) div:nth-child(3) button:first-of-type');
var terugKnop2 = document.querySelector('main section:nth-child(3) div:nth-child(3) button:last-of-type');

var twoPaginaNr = 0;
twolaatFotoZien();	

function twolaatFotoZien() {
	if (twoPaginaNr > sliderFotos2.length -1) { 
		twoPaginaNr = 0; 
	}
	if (twoPaginaNr < 0) { 
		twoPaginaNr = sliderFotos2.length -1; 
	}
	slider2.src = 'images/' + sliderFotos2[twoPaginaNr];
}

vooruitKnop2.addEventListener('click', ()=> {
    twoPaginaNr = twoPaginaNr + 1 ;
	twolaatFotoZien();
} );
terugKnop2.addEventListener('click', ()=> {
    twoPaginaNr = twoPaginaNr - 1 ;
	twolaatFotoZien();
} );


//-(3rd product)----------------------------------------------------------------------------------
var slider3 = document.querySelector('main section:nth-child(3) div:last-of-type img');
var sliderFotos3 = ['shoe3slider1.png', 'shoe3slider2.png', 'shoe3slider3.png', 'shoe3slider4.png', 'shoe3slider5.png', 'shoe3slider6.png'];
var vooruitKnop3 = document.querySelector('main section:nth-child(3) div:last-of-type button:first-of-type');
var terugKnop3 = document.querySelector('main section:nth-child(3) div:last-of-type button:last-of-type');

var threePaginaNr = 0
threelaatFotoZien();	

function threelaatFotoZien() {
	if (threePaginaNr > sliderFotos3.length -1) { 
		threePaginaNr = 0; 
	}
	if (threePaginaNr < 0) { 
		threePaginaNr = sliderFotos3.length -1; 
	}
	slider3.src = 'images/' + sliderFotos3[threePaginaNr];
}

vooruitKnop3.addEventListener('click', ()=> {
    threePaginaNr = threePaginaNr + 1 ;
	threelaatFotoZien();
} );
terugKnop3.addEventListener('click', ()=> {
    threePaginaNr = threePaginaNr - 1 ;
	threelaatFotoZien();
} );


//------------------------------------------------------------------------------------------------