//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************/
/* changing header on scroll */
/*****************************/

//all items in header
const header = document.querySelector('header');
const logo = document.querySelector('header div:first-of-type svg');
let navLeft = document.querySelectorAll('header nav ul:first-of-type a'), i;
const itemcount = document.querySelector('header div:last-of-type a');
const itemcountBg = document.querySelector('header div:last-of-type');
const hamburgerMenu = document.querySelector('header details summary span');


//automatically runs function, adds classes to the header
(function () { 
	
	//screen has max-width of 1000px
	if (window.matchMedia('screen and (max-width: 1000px)').matches) {
		logo.classList.add('fffFill');
		itemcount.classList.add('ooo');
		itemcountBg.classList.add('fffBg');
		hamburgerMenu.classList.add('fffBg');
	}
	else {
		for (i = 0; i < navLeft.length; ++i) { //loop to change all elements in 'navLeft'
			navLeft[i].classList.add('fff');
		}

		logo.classList.add('fffFill');
		itemcount.classList.add('fff');
		itemcountBg.classList.add('oooBg');
		hamburgerMenu.classList.add('fffBg');
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

		for (i = 0; i < navLeft.length; ++i) { 
			navLeft[i].classList.remove('ooo', 'fff');
		}
	
		header.classList.remove('transparent');
		header.classList.add('fffTransparent');

		logo.classList.remove('fffFill');	
		logo.classList.add('oooFill');

		hamburgerMenu.classList.remove('fffBg');
		hamburgerMenu.classList.add('oooBg');
	}

	//page is scrolled 
	else if (window.pageYOffset > 50) {
		header.classList.remove('transparent');
		header.classList.add('fffTransparent');

		for (i = 0; i < navLeft.length; ++i) { 
			navLeft[i].classList.remove('fff');
			navLeft[i].classList.add('ooo');
		}

		logo.classList.remove('fffFill');
		logo.classList.add('oooFill');

		hamburgerMenu.classList.remove('fffBg', 'oooBg');
	}

	else {
		header.classList.remove('fffTransparent');
		header.classList.add('transparent');

		for (i = 0; i < navLeft.length; ++i) { 
			navLeft[i].classList.remove('ooo');
			navLeft[i].classList.add('fff');
		}

		logo.classList.remove('oooFill');
		logo.classList.add('fffFill');	

		hamburgerMenu.classList.remove('oooBg');
		hamburgerMenu.classList.add('fffBg');
	}
});

//-(shopping cart element)-
window.addEventListener('scroll', ()=> { 

	//page is scrolled and screen has a max width of 1000px
	if (window.pageYOffset > 50 && window.matchMedia('screen and (max-width: 1000px)').matches) {
		itemcount.classList.remove('ooo');
		itemcount.classList.add('fff');
		itemcountBg.classList.remove('fffBg');
		itemcountBg.classList.add('oooBg');
	}

	//page is scrolled
	else if (window.pageYOffset > 50) {
		itemcount.classList.remove('ooo');
		itemcount.classList.add('fff');
		itemcountBg.classList.remove('fffBg');
		itemcountBg.classList.add('oooBg');
	}

	//screen has a max width of 1000px
	else if (window.matchMedia('screen and (max-width: 1000px)').matches){
		itemcount.classList.remove('fff');
		itemcount.classList.add('ooo');
		itemcountBg.classList.remove('oooBg');
		itemcountBg.classList.add('fffBg');
	}

	else {
		itemcount.classList.remove('ooo');
		itemcount.classList.add('fff');
		itemcountBg.classList.remove('fffBg');
		itemcountBg.classList.add('oooBg');
	}
});





//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**************************************************************/
/* intersection observer --> fades elements in when scrolling */
/**************************************************************/

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
	rootMargin: "0px 0px -75px 0px" //element needs to be 75px from the bottom
}

const appearOnScroll = new IntersectionObserver(
	(entries, appearOnScroll) => {
	entries.forEach(entry => {
		//NO intersection
		if (!entry.isIntersecting) {
			return;
		}
		//YES intersection
		else {
			entry.target.classList.add("appear"); 
			appearOnScroll.unobserve(entry.target); //only observes once
		}
	});
},
appearOptions);

//when using a intersectionObserver on multiple elements, this forEach loop is needed
faders.forEach(fader => {
	appearOnScroll.observe(fader);
});





//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************************************/
/* shoe product sliders (index.html --> 3rd section) */
/*****************************************************/


//-(1st product)-------------------------------------------------------------------------
const slider1 = document.querySelector('main section:nth-child(3) div:first-of-type img');
const sliderFotos1 = ['shoe1slider1.png', 'shoe1slider2.png', 'shoe1slider3.png', 'shoe1slider4.png', 'shoe1slider5.png', 'shoe1slider6.png'];
const vooruitKnop1 = document.querySelector('main section:nth-child(3) div:first-of-type button:first-of-type');
const terugKnop1 = document.querySelector('main section:nth-child(3) div:first-of-type button:last-of-type');

let onePaginaNr = 0;
onelaatFotoZien();	

function onelaatFotoZien() {
	if (onePaginaNr > sliderFotos1.length -1) { //if paginaNr > last picture? 
		onePaginaNr = 0; //then back to beginning
	}
	if (onePaginaNr < 0) { //if paginaNr < first picture?
		onePaginaNr = sliderFotos1.length -1; //then back to end
	}
	slider1.src = 'images/' + sliderFotos1[onePaginaNr];
}

vooruitKnop1.addEventListener('click', ()=> { //button forward
    onePaginaNr = onePaginaNr + 1 ;
	onelaatFotoZien();
} );
terugKnop1.addEventListener('click', ()=> { //button backwards
    onePaginaNr = onePaginaNr - 1 ;
	onelaatFotoZien();
} );


//-(2nd product)-------------------------------------------------------------------------
const slider2 = document.querySelector('main section:nth-child(3) div:nth-child(3) img');
const sliderFotos2 = ['shoe2slider1.png', 'shoe2slider2.png', 'shoe2slider3.png', 'shoe2slider4.png', 'shoe2slider5.png'];
const vooruitKnop2 = document.querySelector('main section:nth-child(3) div:nth-child(3) button:first-of-type');
const terugKnop2 = document.querySelector('main section:nth-child(3) div:nth-child(3) button:last-of-type');

let twoPaginaNr = 0;
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


//-(3rd product)-------------------------------------------------------------------------
const slider3 = document.querySelector('main section:nth-child(3) div:last-of-type img');
const sliderFotos3 = ['shoe3slider1.png', 'shoe3slider2.png', 'shoe3slider3.png', 'shoe3slider4.png', 'shoe3slider5.png', 'shoe3slider6.png'];
const vooruitKnop3 = document.querySelector('main section:nth-child(3) div:last-of-type button:first-of-type');
const terugKnop3 = document.querySelector('main section:nth-child(3) div:last-of-type button:last-of-type');

let threePaginaNr = 0
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


//-------------------------------------------------------------------------

//    ʕ ᵔᴥᵔ ʔ  <-- a koala