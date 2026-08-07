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




document.querySelectorAll(".hidden")
.forEach(el => {

    observer.observe(el);

});

window.addEventListener("scroll",()=>{

    const header=document.querySelector(".header");

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* =========================
   MOBILE MENU
========================= */

const mobileBtn = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".close-menu");

if(mobileBtn && mobileNav && closeBtn){

    mobileBtn.addEventListener("click",()=>{

        mobileNav.classList.add("active");
        document.body.style.overflow="hidden";

    });

    closeBtn.addEventListener("click",()=>{

        mobileNav.classList.remove("active");
        document.body.style.overflow="";

    });

    document.querySelectorAll(".mobile-nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            mobileNav.classList.remove("active");
            document.body.style.overflow="";

        });

    });

}
