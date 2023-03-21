// accordion's variables
const accordion = document.querySelector(".accordion");
const accordion2 = document.querySelector(".according-2");
const cardLink = document.querySelector(".card-link");
const collapse = document.querySelector(".collapse");
const cards = document.querySelectorAll(".card-item");
const cards2 = document.querySelectorAll(".card-item-2");



// second accordion's card
const elms2 = function() {
    cards2.forEach(el => {
        el.querySelector(".collapse").classList.remove("show");
        el.querySelector(".card-link").classList.add("collapsed");
    });
};

// first accordion's card
const elms = function() {
    cards.forEach(el => {
        el.querySelector(".collapse").classList.remove("show");
        el.querySelector(".card-link").classList.add("collapsed");
    });
};

// card-link show
const cardLinkShow = function() {
    document.querySelector("#cardLink").classList.remove("collapsed");
    // collapse.classList.add("show");
};

// card-link hide
const cardLinkHide = function() {
    document.querySelector("#cardLink").classList.add("collapsed");
    // collapse.classList.remove("show");
};


// first accordior
accordion.addEventListener("click", function(e) {

    // cardLinkShow();

    if (e.target.closest(".card-link")) {
        // cardLinkHide();
        elms2();
    } else {
        return;
    };

});


// secons accordior
accordion2.addEventListener("click", function(e) {

    if (e.target.classList.contains("according-2") || e.target.classList.contains("card-header")) return;

    // cardLinkShow();

    if (e.target.closest(".card-link")) {
        // cardLinkHide();

        // first accordior
        elms();

    };
});


