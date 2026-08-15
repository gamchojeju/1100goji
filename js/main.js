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


/* =========================
   1100 GOJI
   MULTI LANGUAGE - STEP 2
========================= */

const translations = {

    ko: {
        menu: "MENU",
        story: "STORY",
        location: "LOCATION",

        heroTitle: "제주의 맛을 담다",
        heroButton: "MENU VIEW",
        heroDesc: "한라산의 바람과 제주 돼지고기의 깊은 맛",

        menuLabel: "JEJU MENU",
        menuTitle: "제주를 담은 한 그릇",
        menuMore: "전체 메뉴 보기",

       menu1Name: "고기국수",
menu1En: "JEJU NOODLE",
menu1Desc: "제주 돼지고기의 깊은 맛과 따뜻한 육수",

menu2Name: "멸고국수",
menu2En: "ANCHOVY PORK NOODLE",
menu2Desc: "멸치육수와 제주 돼지고기가 어우러진 깊은 맛",

        menu3Name: "비빔국수",
menu3En: "SPICY NOODLE",
menu3Desc: "제주의 맛을 산뜻하게 즐기는 비빔국수",

        menu4Name: "수육백반",
menu4En: "BOILED PORK SET",
menu4Desc: "따뜻한 밥과 함께 즐기는 부드러운 제주 돼지고기",

        storyLabel: "OUR STORY",
        storyTitle: "제주의 맛을,<br>가장 제주답게",

        momentLabel: "JEJU MOMENT",

        routeLabel: "JEJU ROUTE",
        routeTitle: "한라산의 바람을 지나,<br>제주의 맛을 만나다",

        locationLabel: "LOCATION",
        locationTitle: "제주 여행의 시작,<br>1100 GOJI에서",

        closingTitle: "제주에서 만난<br>따뜻한 한 끼",

        footer: "JEJU · KOREA"
    },


    en: {
        menu: "MENU",
        story: "STORY",
        location: "LOCATION",

        heroTitle: "A Taste of Jeju",
        heroButton: "MENU VIEW",
        heroDesc: "The breeze of Hallasan and the rich flavor of Jeju pork",

        menuLabel: "JEJU MENU",
        menuTitle: "A Bowl Filled with Jeju",
        menuMore: "VIEW FULL MENU",

        menu1Name: "JEJU PORK NOODLES",
menu1En: "JEJU NOODLE",
menu1Desc: "A warm bowl of noodles with the rich flavor of Jeju pork",

        menu2Name: "ANCHOVY PORK NOODLES",
menu2En: "ANCHOVY PORK NOODLE",
menu2Desc: "A rich broth combining anchovy stock and Jeju pork",

        menu3Name: "SPICY NOODLES",
menu3En: "SPICY NOODLE",
menu3Desc: "Fresh and flavorful noodles with a taste of Jeju",

        menu4Name: "BOILED PORK SET",
menu4En: "BOILED PORK SET",
menu4Desc: "Tender Jeju pork served with warm rice",

        storyLabel: "OUR STORY",
        storyTitle: "The Taste of Jeju,<br>Just as Jeju Intended",

        momentLabel: "JEJU MOMENT",

        routeLabel: "JEJU ROUTE",
        routeTitle: "Beyond the Breeze of Hallasan,<br>Discover the Taste of Jeju",

        locationLabel: "LOCATION",
        locationTitle: "Start Your Jeju Journey<br>at 1100 GOJI",

        closingTitle: "A Warm Meal<br>Found in Jeju",

        footer: "JEJU · KOREA"
    },


    zh: {
        menu: "菜单",
        story: "故事",
        location: "位置",

        heroTitle: "品味济州",
        heroButton: "查看菜单",
        heroDesc: "汉拿山的风，与济州猪肉浓郁的风味",

        menuLabel: "济州菜单",
        menuTitle: "一碗济州风味",
        menuMore: "查看完整菜单",

        menu1Name: "济州猪肉面",
menu1En: "JEJU NOODLE",
menu1Desc: "一碗温暖的面汤，融入济州猪肉浓郁的鲜香",

menu2Name: "鳀鱼猪肉面",
menu2En: "ANCHOVY PORK NOODLE",
menu2Desc: "鳀鱼高汤与济州猪肉融合的浓郁风味",

        menu3Name: "拌面",
menu3En: "SPICY NOODLE",
menu3Desc: "清爽地享受济州风味的拌面",

        menu4Name: "白切猪肉套餐",
menu4En: "BOILED PORK SET",
menu4Desc: "搭配热腾腾米饭享用的嫩滑济州猪肉",

        storyLabel: "我们的故事",
        storyTitle: "济州的味道，<br>以最济州的方式",

        momentLabel: "济州时光",

        routeLabel: "济州路线",
        routeTitle: "穿过汉拿山的风，<br>遇见济州的味道",

        locationLabel: "位置",
        locationTitle: "济州旅行的开始，<br>就在 1100 GOJI",

        closingTitle: "在济州遇见的<br>温暖一餐",

        footer: "JEJU · KOREA"
    },


    ja: {
        menu: "メニュー",
        story: "ストーリー",
        location: "アクセス",

        heroTitle: "済州の味を楽しむ",
        heroButton: "メニューを見る",
        heroDesc: "漢拏山の風と、済州豚の深い旨み",

        menuLabel: "済州 MENU",
        menuTitle: "済州を味わう一杯",
        menuMore: "メニューを見る",

        menu1Name: "済州ポークヌードル",
menu1En: "JEJU NOODLE",
menu1Desc: "済州豚の旨みを味わえる、あたたかな一杯",

        menu2Name: "いりこ豚肉麺",
menu2En: "ANCHOVY PORK NOODLE",
menu2Desc: "煮干しだしと済州豚が織りなす深い味わい",

        menu3Name: "ビビン麺",
menu3En: "SPICY NOODLE",
menu3Desc: "済州の味をさっぱり楽しめるビビン麺",

        menu4Name: "ゆで豚定食",
menu4En: "BOILED PORK SET",
menu4Desc: "あたたかいご飯と一緒に味わう、やわらかな済州豚",

        storyLabel: "OUR STORY",
        storyTitle: "済州の味を、<br>もっと済州らしく",

        momentLabel: "JEJU MOMENT",

        routeLabel: "JEJU ROUTE",
        routeTitle: "漢拏山の風を越えて、<br>済州の味に出会う",

        locationLabel: "LOCATION",
        locationTitle: "済州旅行のはじまり、<br>1100 GOJIから",

        closingTitle: "済州で出会う<br>あたたかな一食",

        footer: "JEJU · KOREA"
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
/* =========================
   APPLY TRANSLATION
========================= */

function applyTranslations(lang){

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(element => {

        const key =
            element.dataset.i18n;


        if(
            translations[lang] &&
            translations[lang][key]
        ){

            element.innerHTML =
                translations[lang][key];

        }

    });

}

/* =========================
   UPDATE LANGUAGE FUNCTION
========================= */

function setLanguage(lang){

    if(!translations[lang]) return;

    document.documentElement.lang =
        translations[lang].htmlLang || lang;


    languageButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );

    });


    applyTranslations(lang);


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
   INITIAL LANGUAGE
========================= */

const currentLanguage =
    localStorage.getItem(
        "1100goji-language"
    ) || "ko";

setLanguage(currentLanguage);
