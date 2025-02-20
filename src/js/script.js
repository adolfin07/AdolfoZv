
//left
let observerLeft = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showLeft');
        } else {
            entry.target.classList.remove('show');
        }
    });

});


let hiddenElements = document.querySelectorAll('.hiddenLeft');
hiddenElements.forEach((el) => observerLeft.observe(el));

//right
let observerRight = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showRight');
        } else {
            entry.target.classList.remove('show');
        }
    });

});


let hiddenElementsR = document.querySelectorAll('.hiddenRight');
hiddenElementsR.forEach((el) => observerRight.observe(el));

//up
let observerUp = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showUp');
        } else {
            entry.target.classList.remove('show');
        }
    });

});


let hiddenElementsU = document.querySelectorAll('.hiddenUp');
hiddenElementsU.forEach((el) => observerUp.observe(el));


//navbar
let openBtn = document.querySelector("#openBtn");
let navDiv = document.querySelector("#navbar-default");

openBtn.addEventListener('click', () => {
    navDiv.classList.toggle('toggle');
});


console.log(navDiv)

//link 4 each

let links = document.querySelectorAll(".link")

links.forEach(link => {

    link.addEventListener("click", () => {
        navDiv.classList.toggle('toggle');
    });

});





