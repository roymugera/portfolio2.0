
// Body function onload = "xLogo()"
function xLogo () {
    document.getElementById("xLogo-zero").style.visibility = 'hidden';
    document.getElementById("p-zero").style.display = 'none';
    document.getElementById("h-zero").style.display = 'none';
    document.getElementById("l-zero").style.display = 'none';
    document.getElementById("xLogo-one").style.visibility = 'hidden';
    document.getElementById("p-one").style.display = 'none';
    document.getElementById("h-one").style.display = 'none';
    document.getElementById("l-one").style.display = 'none';
    document.getElementById("xLogo-two").style.visibility = 'hidden';
    document.getElementById("p-two").style.display = 'none';
    document.getElementById("h-two").style.display = 'none';
    document.getElementById("l-two").style.display = 'none';
    document.getElementById("xLogo-three").style.visibility = 'hidden';
    document.getElementById("p-three").style.display = 'none';
    document.getElementById("h-three").style.display = 'none';
    document.getElementById("l-three").style.display = 'none';
    document.getElementById("xLogoMini").style.visibility = 'hidden';
    document.getElementById("paragraph-mini").style.display = 'none';
    document.getElementById("xLogoMiniOne").style.visibility = 'hidden';
    document.getElementById("p-mini-one").style.display = 'none';
    document.getElementById("xLogoMiniTwo").style.visibility = 'hidden';
    document.getElementById("h-two-mini").style.display = 'none';
    document.getElementById("p-two-mini").style.display = 'none';
    document.getElementById("l-two-mini").style.display = 'none';
    document.getElementById("xLogoMiniThree").style.visibility = 'hidden';
    document.getElementById("h-three-mini").style.display = 'none';
    document.getElementById("p-three-mini").style.display = 'none';
    document.getElementById("l-three-mini").style.display = 'none';
};


// work-section-one

function dotMenu () {
    document.getElementById("subZero").style.height = '420px';
    document.getElementById("xLogo-zero").style.visibility = 'visible';
    document.getElementById("p-zero").style.display = 'block';
    document.getElementById("h-zero").style.display = 'block';
    document.getElementById("l-zero").style.display = 'block';
};

function xMenu () {
    document.getElementById("subZero").style.height = '0';
    document.getElementById("xLogo-zero").style.visibility = 'hidden';
    document.getElementById("p-zero").style.display = 'none';
    document.getElementById("h-zero").style.display = 'none';
    document.getElementById("l-zero").style.display = 'none';
};

function dotMenuOne() {
    document.getElementById("subOne").style.height = '420px';
    document.getElementById("xLogo-one").style.visibility = 'visible';
    document.getElementById("p-one").style.display = 'block';
    document.getElementById("h-one").style.display = 'block';
    document.getElementById("l-one").style.display = 'block';
};

function xMenuOne() {
    document.getElementById("subOne").style.height = '0';
    document.getElementById("xLogo-one").style.visibility = 'hidden';
    document.getElementById("p-one").style.display = 'none';
    document.getElementById("h-one").style.display = 'none';
    document.getElementById("l-one").style.display = 'none';
};


// work-section-two

function dotMenuTwo() {
    document.getElementById("subTwo").style.height = '420px';
    document.getElementById("xLogo-two").style.visibility = 'visible';
    document.getElementById("p-two").style.display = 'block';
    document.getElementById("h-two").style.display = 'block';
    document.getElementById("l-two").style.display = 'block';

};

function xMenuTwo() {
    document.getElementById("subTwo").style.height = '0';
    document.getElementById("xLogo-two").style.visibility = 'hidden';
    document.getElementById("p-two").style.display = 'none';
    document.getElementById("h-two").style.display = 'none';
    document.getElementById("l-two").style.display = 'none';

};

function dotMenuThree() {
    document.getElementById("subThree").style.height = '420px';
    document.getElementById("xLogo-three").style.visibility = 'visible';
    document.getElementById("p-three").style.display = 'block';
    document.getElementById("h-three").style.display = 'block';
    document.getElementById("l-three").style.display = 'block';
};

function xMenuThree() {
    document.getElementById("subThree").style.height = '0';
    document.getElementById("xLogo-three").style.visibility = 'hidden';
    document.getElementById("p-three").style.display = 'none';
    document.getElementById("h-three").style.display = 'none';
    document.getElementById("l-three").style.display = 'none';
};


// Responsive design
function menuOpen () {
    document.getElementById("side-menu").style.width = '290px';
}
function menuClose () {
    document.getElementById("side-menu").style.width = '0';
};

    
// When clicking on the side
function sideView() {
    document.getElementById("side-menu").style.width = '0';
};


// Box-one-mini

function dotMenuMini () {
    document.getElementById("subZeroMini").style.height = '420px';
    document.getElementById("xLogoMini").style.visibility = 'visible';
    document.getElementById("paragraph-mini").style.display = 'block';
};

function xMenuMini() {
    document.getElementById("subZeroMini").style.height = '0'; 
    document.getElementById("xLogoMini").style.visibility = 'hidden';
    document.getElementById("paragraph-mini").style.display = 'none';

};

function dotMenuMiniOne () {
    document.getElementById("subOneMini").style.height = '420px';
    document.getElementById("xLogoMiniOne").style.visibility = 'visible';
    document.getElementById("p-mini-one").style.display = 'block';
};

function xMenuMiniOne() {
    document.getElementById("subOneMini").style.height = '0'; 
    document.getElementById("xLogoMiniOne").style.visibility = 'hidden';
    document.getElementById("p-mini-one").style.display = 'none';

};


// Box-two-mini

function dotMenuMiniTwo () {
    document.getElementById("subTwoMini").style.height = '420px';
    document.getElementById("xLogoMiniTwo").style.visibility = 'visible';
    document.getElementById("h-two-mini").style.display = 'block';
    document.getElementById("p-two-mini").style.display = 'block';
    document.getElementById("l-two-mini").style.display = 'block';
};

function xMenuMiniTwo() {
    document.getElementById("subTwoMini").style.height = '0';
    document.getElementById("xLogoMiniTwo").style.visibility = 'hidden';
    document.getElementById("h-two-mini").style.display = 'none';
    document.getElementById("p-two-mini").style.display = 'none';
    document.getElementById("l-two-mini").style.display = 'none';

};

function dotMenuMiniThree() {
    document.getElementById("subThreeMini").style.height = '420px';
    document.getElementById("xLogoMiniThree").style.visibility = 'visible';
    document.getElementById("h-three-mini").style.display = 'block';
    document.getElementById("p-three-mini").style.display = 'block';
    document.getElementById("l-three-mini").style.display = 'block';
};

function xMenuMiniThree() {
    document.getElementById("subThreeMini").style.height = '0'; 
    document.getElementById("xLogoMiniThree").style.visibility = 'hidden';
    document.getElementById("h-three-mini").style.display = 'none';
    document.getElementById("p-three-mini").style.display = 'none';
    document.getElementById("l-three-mini").style.display = 'none';

};








