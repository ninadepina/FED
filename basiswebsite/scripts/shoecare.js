//------------------------------------------------------------------------------------------------
// changing header on scroll

window.onload = ()=> { //adds classes after reload
	//page has a max width of 1000px
	if (window.matchMedia('screen and (max-width: 1000px)').matches) {
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
	//page is scrolled and screen has a max width of 1000px
    else if (window.pageYOffset > 50 && window.matchMedia('screen and (max-width: 1000px)').matches) {
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
}

window.onresize = function() {location.reload();} //auto reload after scaling the browser

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
	else if (window.pageYOffset > 50) {
		//page is scrolled 
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



//------------------------------------------------------------------------------------------------
// toggle element in the bottom of the screen

var toggle = document.querySelector('main section:last-of-type label');
toggle.classList.add('displayNone');

//hidden until user scrolls past the header
window.addEventListener('scroll', ()=> {
	if (window.pageYOffset > 170) {
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