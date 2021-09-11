
// changing header on scroll
// var header = document.querySelector("#header");
// var svg = document.querySelector("#fillSVG");

// window.addEventListener('scroll', ()=> {
//     if (window.pageYOffset > 50) {
//         header.classList.add("scrollHeader");
//     }
//     else {
//         header.classList.remove("scrollHeader");
//     }
// });



//------------------------------------------------------------------------------------------------
var slider1 = document.querySelector('#slider1');
var sliderFotos1 = ['shoe1slider1.png', 'shoe1slider2.png', 'shoe1slider3.png', 'shoe1slider4.png', 'shoe1slider5.png', 'shoe1slider6.png'];
var vooruitKnop1 = document.querySelector('#vooruitKnop1');
var terugKnop1 = document.querySelector('#terugKnop1');

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

vooruitKnop1.addEventListener('click' , ()=> {
    onePaginaNr = onePaginaNr + 1 ;
	onelaatFotoZien();
} );
terugKnop1.addEventListener('click' , ()=> {
    onePaginaNr = onePaginaNr - 1 ;
	onelaatFotoZien();
} );
//------------------------------------------------------------------------------------------------
var slider2 = document.querySelector('#slider2');
var sliderFotos2 = ['shoe2slider1.png', 'shoe2slider2.png', 'shoe2slider3.png', 'shoe2slider4.png', 'shoe2slider5.png'];
var vooruitKnop2 = document.querySelector('#vooruitKnop2');
var terugKnop2 = document.querySelector('#terugKnop2');

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

vooruitKnop2.addEventListener('click' , ()=> {
    twoPaginaNr = twoPaginaNr + 1 ;
	twolaatFotoZien();
} );
terugKnop2.addEventListener('click' , ()=> {
    twoPaginaNr = twoPaginaNr - 1 ;
	twolaatFotoZien();
} );
//------------------------------------------------------------------------------------------------
var slider3 = document.querySelector('#slider3');
var sliderFotos3 = ['shoe3slider1.png', 'shoe3slider2.png', 'shoe3slider3.png', 'shoe3slider4.png', 'shoe3slider5.png', 'shoe3slider6.png'];
var vooruitKnop3 = document.querySelector('#vooruitKnop3');
var terugKnop3 = document.querySelector('#terugKnop3');

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

vooruitKnop3.addEventListener('click' , ()=> {
    threePaginaNr = threePaginaNr + 1 ;
	threelaatFotoZien();
} );
terugKnop3.addEventListener('click' , ()=> {
    threePaginaNr = threePaginaNr - 1 ;
	threelaatFotoZien();
} );