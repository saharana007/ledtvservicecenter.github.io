// accordion's variables
const accordion = document.querySelector(".accordion");
const accordion2 = document.querySelector(".according-2");
const cardLink = document.querySelector(".card-link");
const collapse = document.querySelector(".collapse");
const cards = document.querySelectorAll(".card-item");
const cards2 = document.querySelectorAll(".card-item-2");



// first accordion's card
const elms2 = function() {
    cards2.forEach(el => {
        el.querySelector(".collapse").classList.remove("show");
        el.querySelector(".card-link").classList.add("collapsed");
    });
};

// second accordion's card
const elms = function() {
    cards.forEach(el => {
        el.querySelector(".collapse").classList.remove("show");
        el.querySelector(".card-link").classList.add("collapsed");
    });
};


// first accordior
accordion.addEventListener("click", function(e) {

    if (e.target.closest(".card-link")) {
        console.log("clicked");
        elms2();
    } else {
        return;
    };

});


// secons accordior
accordion2.addEventListener("click", function(e) {
    // console.log(e.target);

    cardLink.classList.remove("collapsed");
    collapse.classList.add("show");

    if (e.target.closest(".card-link")) {
        cardLink.classList.add("collapsed");
        collapse.classList.remove("show");

        elms();

    } else {
        return;
    };



});

/// Intersection Observer ///

const rsFooter = document.querySelector(".rs-footer");
const popUpCalling = document.querySelector(".pop-up-calling-box");

// popUpCalling.style.backgroundColor = "#032e42";

// const callingBox = function(entries, observe) {
//     console.log(entries);

//     const [entr] = entries;

//     if (!entr.isIntersecting) {
//         popUpCalling.style.backgroundColor = "#032e42";
//     };

//     if (entr.intersectionRatio) {
//         popUpCalling.style.backgroundColor = "white";
//     };

//     observe.unobserve(rsFooter);
// };


// const observer = new IntersectionObserver(callingBox, {
//     root: null,
//     threshold: 0.1,
// });

// observer.observe(rsFooter);
