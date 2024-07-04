let landing = document.getElementsByClassName("container")[0]
let maintext = document.getElementsByClassName("maintext")[0]
let sectext = document.getElementsByClassName("sectext")[0]
let mobileHeader = document.getElementById("mobile-header")
let images = ["home-1.jpg", "home-2.jpg", "home-3.jpg"];
let mobileImages = ["mobile-1.jpg","mobile-2.jpg","mobile-3.jpg"]
let script = ["Cattle farm", "Cow breeds", "Fresh milk"];
let secscript = ["Organic farm and shop", "Types of cows on farm", "Organic diary products"];
// let ismobile = window.matchMedia("(max-width:1000px)")

// function handelscreen(e) {
//     if (e.matches) {
//         setInterval(changeMobile, 3000)
//     } else {
//         setInterval(changeImg, 3000);
//     }
// }

// ismobile.addListener(handelscreen);
// handelscreen(ismobile);

// function changeImg() {
//     let random= Math.floor(Math.random()* images.length )
//     landing.style.backgroundImage = 'url("/assets/imgs/'+images[random]+'")'
//     maintext.innerHTML = script[random]
//     sectext.innerHTML = secscript[random]
// }
// function changeMobile() {
//     let randomnum= Math.floor(Math.random()* mobileImages.length )
//     landing.style.backgroundImage = 'url("/assets/imgs/'+mobileImages[randomnum]+'")'
//     maintext.innerHTML = script[randomnum]
//     sectext.innerHTML = secscript[randomnum]
// }



let isMobile = window.matchMedia("(max-width: 1000px)");

function handleScreenChange(e) {
    if (e.matches) {
        setInterval(changeMobile, 3000);
    } else {
        setInterval(changeImg, 3000);
    }
}

isMobile.addListener(handleScreenChange);
handleScreenChange(isMobile);

function changeImg() {
    let random = Math.floor(Math.random() * images.length);
    landing.style.backgroundImage = 'url("../assets/imgs/' + images[random] + '")';
    maintext.innerHTML = script[random];
    sectext.innerHTML = secscript[random];
}

function changeMobile() {
    let randomnum = Math.floor(Math.random() * mobileImages.length);
    landing.style.backgroundImage = 'url("../assets/imgs/' + mobileImages[randomnum] + '")';
    maintext.innerHTML = script[randomnum];
    sectext.innerHTML = secscript[randomnum];
}

let nav = document.getElementsByClassName("nav")[0]

function openMenu() {
    nav.classList.toggle("navMenu");

}
