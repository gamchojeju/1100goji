// =========================
// 1100 GOJI SCRIPT
// Build 0.42
// =========================



// HEADER SCROLL EFFECT

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        header.style.background =
        "rgba(47,93,80,0.92)";

        header.style.backdropFilter =
        "blur(10px)";

    }else{

        header.style.background =
        "transparent";

    }


});





// SCROLL FADE ANIMATION


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:0.15

});




document.querySelectorAll(
".story, .menu-card, .travel, .location"
)
.forEach(el=>{


el.classList.add("hidden");

observer.observe(el);


});

/* =========================
   1100 GOJI
   Build 0.50
========================= */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

hiddenElements.forEach(el => observer.observe(el));
