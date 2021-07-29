
//Open & Close Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Theme Randomizer
function randomTheme() {
    let theme = document.body;
    let number = Math.floor(Math.random()*3)
    switch (number) {
        case 0:
            theme.className = 'dark';
            break;
        case 1:
            theme.className = 'light';
            break;
        case 2:
            theme.className = 'colorful';
            break;
    }
    theme.className = color;
    randomize.removeEventListener('click', randomTheme);
}

let randomize = document.getElementById('randomize')
randomize.addEventListener('click', randomTheme);

//Theme Menu
function menuCreator(){
    let themebar = document.getElementsByClassName('theme-menu');
    themebar[0].style.right = '0';
}

let themeMenu = document.getElementById('themeselect')

themeMenu.addEventListener('click', menuCreator);

// close option
function closeThemeBar(){
    let themebar = document.getElementsByClassName('theme-menu');
    themebar[0].style.right = '-100%';
}

let close = document.getElementById('close');

close.addEventListener('click', closeThemeBar);

//Theme Dark
function darkTheme() {
    let theme = document.body;
    theme.className = 'dark';
}

document.getElementById('dark').onclick = darkTheme;

//Theme Light
function lightTheme() {
    let theme = document.body;
    theme.className = 'light';
}

document.getElementById('light').onclick = lightTheme;

//Theme Colorful
function colorfulTheme() {
    let theme = document.body;
    theme.className = 'colorful';
}

document.getElementById('colorful').onclick = colorfulTheme;