//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// mouse scroll animation


var h2 = document.querySelector('main section:first-of-type h2');
var mouse = document.querySelector('main section:first-of-type div');

//automatically runs function, adds animation when in desktop
(function () { 

	//screen has a min width of 1425px (desktop)
	if (window.matchMedia('screen and (min-width: 1425px)').matches) {
		mouse.classList.remove('displayNone');
		h2.classList.add('displayNone');
	}
	else {
		h2.classList.remove('displayNone');
		mouse.classList.add('displayNone');
	}
}());





//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// changing header on scroll


//automatically runs function, adds classes to the header
(function () { 
	
	//page is scrolled and screen has a max width of 1000px
    if (window.pageYOffset > 50 && window.matchMedia('screen and (max-width: 1000px)').matches) {
        document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('fff');
        document.querySelector('header nav ul:last-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:last-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:last-of-type li:last-of-type a').classList.add('fff');
		document.querySelector('header div:last-of-type a').classList.add('fff');
		document.querySelector('header div:first-of-type svg').classList.add('fffFill');
		document.querySelector('header div:last-of-type').classList.add('fffBg');
		document.querySelector('header details summary span').classList.add('fffBg');
    }
	
	//page has a max width of 1000px
	else if (window.matchMedia('screen and (max-width: 1000px)').matches) {
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('fff');
        document.querySelector('header nav ul:last-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:last-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:last-of-type li:last-of-type a').classList.add('fff');
		document.querySelector('header div:last-of-type a').classList.add('ooo');
		document.querySelector('header div:first-of-type svg').classList.add('fffFill');
		document.querySelector('header div:last-of-type').classList.add('fffBg');
		document.querySelector('header details summary span').classList.add('fffBg');
	}

	else {
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('fff');
        document.querySelector('header nav ul:last-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:last-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:last-of-type li:last-of-type a').classList.add('fff');
		document.querySelector('header div:last-of-type a').classList.add('ooo');
		document.querySelector('header div:first-of-type svg').classList.add('fffFill');
		document.querySelector('header div:last-of-type').classList.add('fffBg');
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
        document.querySelector('header nav ul:last-of-type li:first-of-type a').classList.remove('fff');
		document.querySelector('header nav ul:last-of-type li:nth-child(2) a').classList.remove('fff');
		document.querySelector('header nav ul:last-of-type li:last-of-type a').classList.remove('fff');

		document.querySelector('header').classList.add('fffTransparent');
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('ooo');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('ooo');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('ooo');
		document.querySelector('header div:first-of-type svg').classList.add('oooFill');
        document.querySelector('header nav ul:last-of-type li:first-of-type a').classList.add('ooo');
		document.querySelector('header nav ul:last-of-type li:nth-child(2) a').classList.add('ooo');
		document.querySelector('header nav ul:last-of-type li:last-of-type a').classList.add('ooo');

		//removes mouse animation and adds h2
		h2.classList.remove('displayNone');
		mouse.classList.add('displayNone');
	}

	else {
		document.querySelector('header').classList.remove('fffTransparent');
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.remove('ooo');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.remove('ooo');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.remove('ooo');
		document.querySelector('header div:first-of-type svg').classList.remove('oooFill');
		document.querySelector('header details summary span').classList.remove('oooBg');
        document.querySelector('header nav ul:last-of-type li:first-of-type a').classList.remove('ooo');
		document.querySelector('header nav ul:last-of-type li:nth-child(2) a').classList.remove('ooo');
		document.querySelector('header nav ul:last-of-type li:last-of-type a').classList.remove('ooo');

		document.querySelector('header').classList.add('transparent');
		document.querySelector('header nav ul:first-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:first-of-type li:last-of-type a').classList.add('fff');
		document.querySelector('header div:first-of-type svg').classList.add('fffFill');	
		document.querySelector('header details summary span').classList.add('fffBg');
        document.querySelector('header nav ul:last-of-type li:first-of-type a').classList.add('fff');
		document.querySelector('header nav ul:last-of-type li:nth-child(2) a').classList.add('fff');
		document.querySelector('header nav ul:last-of-type li:last-of-type a').classList.add('fff');
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

	else {
		document.querySelector('header div:last-of-type a').classList.remove('fff');
		document.querySelector('header div:last-of-type a').classList.add('ooo');
		document.querySelector('header div:last-of-type').classList.remove('oooBg');
		document.querySelector('header div:last-of-type').classList.add('fffBg');
	}
});



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// toggle element in the bottom of the screen
var toggle = document.querySelector('main section:last-of-type label');

//adds classes after reload
window.onload = ()=> { 
	//screen has a max-width of 710px
	if (window.matchMedia('screen and (max-width: 710px)').matches) {
		toggle.classList.remove('displayNone');
	}
	else {
		toggle.classList.add('displayNone');
	}
}



//visibility changes of the toggle element when scrolled
window.addEventListener('scroll', ()=> {

	//page has Yoffset > 170 (so page is scrolled) and screen has a min-width of 1001px and user DOESN'T scroll over footer
	if (window.pageYOffset > 170 && window.matchMedia('screen and (min-width: 1001px)').matches && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 150) {
		toggle.classList.remove('displayNone');
	}
	
	//page has Yoffset > 180 (so page is scrolled) and screen has a max-width of 1000px + a min-width of 711px and user DOESN'T scroll over footer
	else if (window.pageYOffset > 180 && window.matchMedia('screen and (max-width: 1000px)').matches && window.matchMedia('screen and (min-width: 711px)').matches && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 335) {
		toggle.classList.remove('displayNone');
	}

	//screen has a max-width of 710px and user DOESN'T scroll over footer
	else if (window.matchMedia('screen and (max-width: 710px)').matches && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 335) {
		toggle.classList.remove('displayNone');
	}

	else {
		toggle.classList.add('displayNone');
	}
});




var toggleElementRight = document.querySelector('main section:last-of-type label div div a:last-of-type');
var toggleElementLeft = document.querySelector('main section:last-of-type label div div a:first-of-type');
var toggleButton = document.querySelector('main section:last-of-type label div div:last-of-type');

toggleButton.classList.add('left');
toggleElementLeft.classList.add('fff');
toggleElementRight.classList.add('transparentText');

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
toggleElementRight.addEventListener('mouseout', ()=> {
	toggleButton.classList.remove('right');
	toggleButton.classList.add('left')
	toggleElementRight.classList.remove('fff');
	toggleElementRight.classList.add('transparentText');
	toggleElementLeft.classList.remove('transparentText');
	toggleElementLeft.classList.add('fff');
});