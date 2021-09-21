//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// changing header on scroll


//automatically runs function, adds classes to the header
(function () { 
	document.querySelector('header div:last-of-type').classList.add('oooBg');
	document.querySelector('header div:last-of-type a').classList.add('fff');
	document.querySelector('header details summary span').classList.add('oooBg');
}());


//-(all elements)-
window.addEventListener('scroll', ()=> {

	//page is scrolled
	if (window.pageYOffset > 50) {
		document.querySelector('header').classList.remove('transparent');
		document.querySelector('header').classList.add('fffTransparent');
	}
	else {
		document.querySelector('header').classList.remove('fffTransparent');
		document.querySelector('header').classList.add('transparent');
	}
});



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// shoe care product sliders (shoecare-grid.html --> 1st section)


//-(cleaning kit)----------------------------------------------------------------------------------
var slider1st = document.querySelector('main section:first-of-type article:first-of-type img');
var sliderShoeKit = ['shoeKit.jpg', 'shoeKit2.jpg', 'shoeKit3.jpg'];
var forward1 = document.querySelector('section:first-of-type article:first-of-type button:last-of-type');
var back1 = document.querySelector('section:first-of-type article:first-of-type button:first-of-type');

var pageNr1 = 0;
showImg();	

function showImg() {
	if (pageNr1 > sliderShoeKit.length -1) { //paginaNr > laatste foto? 
		pageNr1 = 0; //dan terug naar begin
	}
	if (pageNr1 < 0) { //paginaNr < eerste foto?
		pageNr1 = sliderShoeKit.length -1; //dan terug naar einde
	}
	slider1st.src = 'images/' + sliderShoeKit[pageNr1];
}

forward1.addEventListener('click', ()=> {
    pageNr1 = pageNr1 + 1 ;
	showImg();
} );
back1.addEventListener('click', ()=> {
    pageNr1 = pageNr1 - 1 ;
	showImg();
} );


//-(sneaker wipes)----------------------------------------------------------------------------------
var slider2nd = document.querySelector('main section:first-of-type article:nth-child(3) img');
var sliderWipes = ['wipes.jpg', 'wipes2.jpg', 'wipes3.jpg'];
var forward2 = document.querySelector('section:first-of-type article:nth-child(3) button:last-of-type');
var back2 = document.querySelector('section:first-of-type article:nth-child(3) button:first-of-type');

var pageNr2 = 0;
showImg2();	

function showImg2() {
	if (pageNr2 > sliderWipes.length -1) { 
		pageNr2 = 0;
	}
	if (pageNr2 < 0) { 
		pageNr2 = sliderWipes.length -1; 
	}
	slider2nd.src = 'images/' + sliderWipes[pageNr2];
}

forward2.addEventListener('click', ()=> {
    pageNr2 = pageNr2 + 1 ;
	showImg2();
} );
back2.addEventListener('click', ()=> {
    pageNr2 = pageNr2 - 1 ;
	showImg2();
} );


//-(insoles)----------------------------------------------------------------------------------
var slider3rd = document.querySelector('main section:first-of-type article:nth-child(4) img');
var sliderInsoles = ['insoles.jpg', 'insoles2.png'];
var forward3 = document.querySelector('section:first-of-type article:nth-child(4) button:last-of-type');
var back3 = document.querySelector('section:first-of-type article:nth-child(4) button:first-of-type');

var pageNr3 = 0;
showImg3();	

function showImg3() {
	if (pageNr3 > sliderInsoles.length -1) { 
		pageNr3 = 0;
	}
	if (pageNr3 < 0) { 
		pageNr3 = sliderInsoles.length -1; 
	}
	slider3rd.src = 'images/' + sliderInsoles[pageNr3];
}

forward3.addEventListener('click', ()=> {
    pageNr3 = pageNr3 + 1 ;
	showImg3();
} );
back3.addEventListener('click', ()=> {
    pageNr3 = pageNr3 - 1 ;
	showImg3();
} );


//-(arch support)----------------------------------------------------------------------------------
var slider4th = document.querySelector('main section:first-of-type article:last-of-type img');
var sliderArch = ['archSupport.png', 'archSupport2.jpg'];
var forward4 = document.querySelector('section:first-of-type article:last-of-type button:last-of-type');
var back4 = document.querySelector('section:first-of-type article:last-of-type button:first-of-type');

var pageNr4 = 0;
showImg4();	

function showImg4() {
	if (pageNr4 > sliderArch.length -1) { 
		pageNr4 = 0;
	}
	if (pageNr4 < 0) { 
		pageNr4 = sliderArch.length -1; 
	}
	slider4th.src = 'images/' + sliderArch[pageNr4];
}

forward4.addEventListener('click', ()=> {
    pageNr4 = pageNr4 + 1 ;
	showImg4();
} );
back4.addEventListener('click', ()=> {
    pageNr4 = pageNr4 - 1 ;
	showImg4();
} );



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// toggle element in bottom of the screen
var toggle = document.querySelector('main section:last-of-type label');

toggle.classList.remove('displayNone');

//hidden when user scrolls to footer
window.addEventListener('scroll', ()=> {
	if (window.matchMedia('screen and (min-width: 1001px)').matches && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 150) {
		toggle.classList.remove('displayNone');
	}
	else if (window.matchMedia('screen and (max-width: 1000px)').matches && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 335) {
		toggle.classList.remove('displayNone');
	}
	else {
		toggle.classList.add('displayNone');
	}
});

var toggleElementRight = document.querySelector('main section:last-of-type label div div a:last-of-type');
var toggleElementLeft = document.querySelector('main section:last-of-type label div div a:first-of-type');
var toggleButton = document.querySelector('main section:last-of-type label div div:last-of-type');

toggleButton.classList.add('right');
toggleElementRight.classList.add('fff');
toggleElementLeft.classList.add('transparentText');

//adds style and positions the toggle element when cursor hovers over right side
toggleElementRight.addEventListener('mouseover', ()=> {
	toggleButton.classList.remove('left');
	toggleButton.classList.add('right');
	toggleElementRight.classList.remove('transparentText');
	toggleElementRight.classList.add('fff');
	toggleElementLeft.classList.remove('fff');
	toggleElementLeft.classList.add('transparentText');
});

//adds style and positions the toggle element when cursor hovers over left side
toggleElementLeft.addEventListener('mouseover', ()=> {
	toggleButton.classList.remove('right');
	toggleButton.classList.add('left');
	toggleElementRight.classList.remove('fff');
	toggleElementRight.classList.add('transparentText');
	toggleElementLeft.classList.remove('transparentText');
	toggleElementLeft.classList.add('fff');
});

//moves toggle element back to orignal position when cursor leaves
toggleElementLeft.addEventListener('mouseout', ()=> {
	toggleButton.classList.remove('left');
	toggleButton.classList.add('right');
	toggleElementRight.classList.remove('transparentText');
	toggleElementRight.classList.add('fff');
	toggleElementLeft.classList.remove('fff');
	toggleElementLeft.classList.add('transparentText');
});