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

    /* OPEN */

    mobileBtn.addEventListener("click",()=>{

        mobileNav.classList.add("active");

        document.body.classList.add("menu-open");

        document.body.style.overflow = "hidden";

    });


    /* CLOSE */

    closeBtn.addEventListener("click",()=>{

        mobileNav.classList.remove("active");

        document.body.classList.remove("menu-open");

        document.body.style.overflow = "";

    });


    /* MENU LINK */

    document.querySelectorAll(".mobile-nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            mobileNav.classList.remove("active");

            document.body.classList.remove("menu-open");

            document.body.style.overflow = "";

        });

    });

}

/* =========================
   ALL MENU
========================= */

const menuMoreBtn = document.querySelector(".menu-more");
const allMenu = document.querySelector("#allMenu");
const allMenuClose = document.querySelector("#allMenuClose");

if (menuMoreBtn && allMenu && allMenuClose) {

    menuMoreBtn.addEventListener("click", function(e) {

        e.preventDefault();

        allMenu.classList.add("active");

        document.body.style.overflow = "hidden";

    });


    allMenuClose.addEventListener("click", function() {

        allMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

}

/* =========================
   LANGUAGE SWITCHER
========================= */

const languageButtons =
    document.querySelectorAll(".language-switcher button");


const translations = {

    ko: {
        htmlLang: "ko"
    },

    en: {
        htmlLang: "en"
    },

    zh: {
        htmlLang: "zh-CN"
    },

    ja: {
        htmlLang: "ja"
    }

};


function setLanguage(lang){

    if(!translations[lang]) return;

    document.documentElement.lang =
        translations[lang].htmlLang;


    languageButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );

    });


    localStorage.setItem(
        "1100goji-language",
        lang
    );

}


languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        setLanguage(
            button.dataset.lang
        );

    });

});


/* =========================
   DEFAULT LANGUAGE
========================= */

const savedLanguage =
    localStorage.getItem("1100goji-language");


setLanguage(
    savedLanguage || "ko"
);
