//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**************************/
/* mouse scroll animation */
/**************************/


const h2 = document.querySelector('main section:first-of-type h2');
const mouse = document.querySelector('main section:first-of-type div');

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
/*****************************/
/* changing header on scroll */
/*****************************/

//all items in header
const header = document.querySelector('header');
const logo = document.querySelector('header div:first-of-type svg');
let navLeft = document.querySelectorAll('header nav ul:first-of-type a'), i;
let navRight = document.querySelectorAll('header nav ul:last-of-type a'), j;
const itemcount = document.querySelector('header div:last-of-type a');
const itemcountBg = document.querySelector('header div:last-of-type');
const hamburgerMenu = document.querySelector('header details summary span');


//automatically runs function, adds classes to the header
(function () { 
	
	//page is scrolled and screen has a max width of 1000px
    if (window.pageYOffset > 50 && window.matchMedia('screen and (max-width: 1000px)').matches) {

		for (i = 0; i < navLeft.length; ++i) { //loop to change all elements in 'navLeft'
			navLeft[i].classList.add('fff');
		}
	
		for (j = 0; j < navRight.length; ++j) { //loop to change all elements in 'navRight'
			navRight[j].classList.add('fff');
		}

		logo.classList.add('fffFill');
		itemcount.classList.add('fff');
		itemcountBg.classList.add('fffBg');
		hamburgerMenu.classList.add('fffBg');
    }
	
	//page has a max width of 1000px
	else if (window.matchMedia('screen and (max-width: 1000px)').matches) {
		for (i = 0; i < navLeft.length; ++i) { 
			navLeft[i].classList.add('fff');
		}
		for (j = 0; j < navRight.length; ++j) { 
			navRight[j].classList.add('fff');
		}
 
		logo.classList.add('fffFill');
		itemcount.classList.add('ooo');
		itemcountBg.classList.add('fffBg');
		hamburgerMenu.classList.add('fffBg');
	}

	else {
		for (i = 0; i < navLeft.length; ++i) { 
			navLeft[i].classList.add('fff');
		}
		for (j = 0; j < navRight.length; ++j) { 
			navRight[j].classList.add('fff');
		}

		logo.classList.add('fffFill');
		itemcount.classList.add('ooo');
		itemcountBg.classList.add('fffBg');
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
		header.classList.remove('transparent');
		header.classList.add('fffTransparent');

		for (i = 0; i < navLeft.length; ++i) { 
			navLeft[i].classList.remove('ooo');
		}
		for (j = 0; j < navRight.length; ++j) { 
			navRight[j].classList.remove('fff');
		}

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
		for (j = 0; j < navRight.length; ++j) { 
			navRight[j].classList.remove('fff');
			navRight[j].classList.add('ooo');
		}

		logo.classList.remove('fffFill');
		logo.classList.add('oooFill');

		hamburgerMenu.classList.remove('fffBg', 'oooBg');

		//removes mouse animation and adds h2
		h2.classList.remove('displayNone');
		mouse.classList.add('displayNone');
	}

	else {
		header.classList.remove('fffTransparent');
		header.classList.add('transparent');

		for (i = 0; i < navLeft.length; ++i) { 
			navLeft[i].classList.remove('ooo');
			navLeft[i].classList.add('fff');
		}
		for (j = 0; j < navRight.length; ++j) { 
			navRight[j].classList.remove('ooo');
			navRight[j].classList.add('fff');
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

	else {
		itemcount.classList.remove('fff');
		itemcount.classList.add('ooo');
		itemcountBg.classList.remove('oooBg');
		itemcountBg.classList.add('fffBg');
	}
});



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**********************************************/
/* toggle element in the bottom of the screen */
/**********************************************/

const toggle = document.querySelector('main section:last-of-type label');

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




const toggleElementRight = document.querySelector('main section:last-of-type label div div a:last-of-type');
const toggleElementLeft = document.querySelector('main section:last-of-type label div div a:first-of-type');
const toggleButton = document.querySelector('main section:last-of-type label div div:last-of-type');

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