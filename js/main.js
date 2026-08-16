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

menu5Name: "고사리육개장",
menu5En: "FERN SOUP",
menu5Desc: "제주 고사리의 깊은 풍미와 진한 육수가 어우러진 한 그릇",

menu6Name: "돼지국밥",
menu6En: "PORK SOUP RICE",
menu6Desc: "든든하게 즐기는 제주식 돼지국밥",

        menu7Name: "돔베고기",
menu7En: "DOMBE GOGI",
menu7Desc: "제주식으로 즐기는 담백하고 촉촉한 돔베고기",

        storyLabel: "JEJU STORY",

storyTitle: "1100m의 바람,<br>제주의 시간을 담다",

storyText: "한라산 아래,<br><br>제주의 시간을 담아<br>따뜻한 한 그릇을 준비합니다.<br><br>여행의 하루가<br>오래 기억될 수 있도록.",
        


        
        
        momentLabel: "JEJU MOMENT",
        momentTitle: "제주를 걷던 하루,<br>잠시 쉬어가는 시간",

momentText: "한라산 아래에서 만나는<br>따뜻한 한 그릇.<br><br>1100 GOJI의 한 끼는<br>여행을 오래 기억하게 합니다.",

        routeLabel: "JEJU ROUTE",
        routeTitle: "한라산의 바람을 지나,<br>제주의 맛을 만나다",
routeStart: "HALLASAN",
routeEnd: "JEJU MEMORY",

        locationLabel: "LOCATION",
        locationTitle: "제주 여행의 시작,<br>1100 GOJI에서",
        locationDesc: "한라산 여행의 시작과 끝에서<br>따뜻한 제주를 만나보세요.",

locationAddress: "📍 제주 제주시 수덕로 9",

locationAirport: "✈ 제주공항에서 차량 약 15분",

locationParking: "🚗 주차 가능",

locationHours: "🕒 영업시간 11:00 ~ 21:00<br>Last order 20:20",

locationPhone: "☎ 0507-1363-1109",

locationKakao: "카카오맵 길찾기",

locationNaver: "네이버지도 길찾기",

        

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

menu5Name: "FERN SOUP",
menu5En: "FERN SOUP",
menu5Desc: "A hearty bowl combining the deep flavor of Jeju bracken and rich broth",

menu6Name: "PORK SOUP RICE",
menu6En: "PORK SOUP RICE",
menu6Desc: "A hearty Jeju-style pork soup served with rice",

        menu7Name: "DOMBE GOGI",
menu7En: "JEJU-STYLE BOILED PORK",
menu7Desc: "Tender and juicy Jeju-style boiled pork",

        storyLabel: "JEJU STORY",

storyTitle: "Embracing the winds of 1,100m,<br>capturing the essence of Jeju",

storyText: "Beneath Hallasan,<br><br>we prepare a warm bowl<br>filled with the spirit of Jeju.<br><br>So that each day of your journey<br>will be remembered for a long time.",
        

        storyLabel: "OUR STORY",
        storyTitle: "The Taste of Jeju,<br>Just as Jeju Intended",

        momentLabel: "JEJU MOMENT",
        momentTitle: "A day walking through Jeju,<br>a moment to pause and rest",

momentText: "A warm bowl waiting for you<br>beneath Hallasan.<br><br>A meal at 1100 GOJI<br>turns your journey into a lasting memory.",

        routeLabel: "JEJU ROUTE",
        routeTitle: "Beyond the Breeze of Hallasan,<br>Discover the Taste of Jeju",
        routeStart: "HALLASAN",
routeEnd: "JEJU MEMORY",

        locationLabel: "LOCATION",
        locationTitle: "Start Your Jeju Journey<br>at 1100 GOJI",
        locationDesc: "At the beginning and end of your Hallasan journey,<br>discover the warmth of Jeju.",

locationAddress: "📍 9 Sudeok-ro, Jeju-si, Jeju",

locationAirport: "✈ About 15 minutes by car from Jeju Airport",

locationParking: "🚗 Parking available",

locationHours: "🕒 Hours 11:00 ~ 21:00<br>Last order 20:20",

locationPhone: "☎ 0507-1363-1109",

locationKakao: "KakaoMap Directions",

locationNaver: "Naver Map Directions",

        

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

menu5Name: "蕨菜牛肉汤",
menu5En: "FERN SOUP",
menu5Desc: "济州蕨菜的浓郁风味与醇厚汤汁融合的一碗暖汤",

menu6Name: "猪肉汤饭",
menu6En: "PORK SOUP RICE",
menu6Desc: "饱腹又温暖的济州风味猪肉汤饭",

        menu7Name: "济州岛白切猪肉",
menu7En: "济州风味白切猪肉",
menu7Desc: "济州风味的嫩滑多汁水煮猪肉",

        storyLabel: "JEJU STORY",

storyTitle: "1100米的风，<br>盛满济州的时光",

storyText: "在汉拿山脚下，<br><br>我们将济州的时光融入其中，<br>准备一碗温暖的美味。<br><br>愿旅途中的每一天<br>都成为久久难忘的回忆。",

        storyLabel: "我们的故事",
        storyTitle: "济州的味道，<br>以最济州的方式",

        momentLabel: "济州时光",
        momentTitle: "漫步济州的一天，<br>停下来歇一会儿",

momentText: "在汉拿山脚下享用<br>温暖的一碗美味。<br><br>1100 GOJI的一餐<br>让旅途成为久久难忘的回忆。",

        routeLabel: "济州路线",
        routeTitle: "穿过汉拿山的风，<br>遇见济州的味道",
        routeStart: "汉拿山",
routeEnd: "JEJU MEMORY",

        locationLabel: "位置",
        locationTitle: "济州旅行的开始，<br>就在 1100 GOJI",
        locationDesc: "从汉拿山旅程的开始到结束，<br>感受温暖的济州。",

locationAddress: "📍 济州市 水德路 9",

locationAirport: "✈ 从济州机场驾车约15分钟",

locationParking: "🚗 提供停车",

locationHours: "🕒 营业时间 11:00 ~ 21:00<br>Last order 20:20",

locationPhone: "☎ 0507-1363-1109",

locationKakao: "KakaoMap 路线",

locationNaver: "Naver Map 路线",

        

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

menu5Name: "ワラビユッケジャン",
menu5En: "FERN SOUP",
menu5Desc: "済州ワラビの深い風味と濃厚なスープが溶け合う一杯",

menu6Name: "豚肉クッパ",
menu6En: "PORK SOUP RICE",
menu6Desc: "食べ応えのある済州スタイルの豚肉クッパ",

        menu7Name: "トンベコギ",
menu7En: "済州式ゆで豚",
menu7Desc: "済州島ならではの、やわらかくジューシーなゆで豚",

        storyLabel: "JEJU STORY",
        momentTitle: "済州を歩いた一日、<br>ひと休みする時間",

momentText: "漢拏山のふもとで出会う<br>心あたたまる一杯。<br><br>1100 GOJIでのひとときが<br>旅の思い出をより深いものにします。",

storyTitle: "標高1,100mの風、<br>済州の時間を込めて",

storyText: "漢拏山のふもとで、<br><br>済州の時間を感じながら<br>心あたたまる一杯を用意しています。<br><br>旅の一日が<br>いつまでも心に残りますように。",

        storyLabel: "OUR STORY",
        storyTitle: "済州の味を、<br>もっと済州らしく",

        momentLabel: "JEJU MOMENT",

        routeLabel: "JEJU ROUTE",
        routeTitle: "漢拏山の風を越えて、<br>済州の味に出会う",
        routeStart: "漢拏山",
routeEnd: "JEJU MEMORY",

        locationLabel: "LOCATION",
        locationTitle: "済州旅行のはじまり、<br>1100 GOJIから",

        locationDesc: "漢拏山の旅の始まりと終わりに、<br>あたたかな済州をお楽しみください。",

locationAddress: "📍 済州市 スドク路 9",

locationAirport: "✈ 済州空港から車で約15分",

locationParking: "🚗 駐車可能",

locationHours: "🕒 営業時間 11:00 ~ 21:00<br>Last order 20:20",

locationPhone: "☎ 0507-1363-1109",

locationKakao: "KakaoMap ルート検索",

locationNaver: "Naver Map ルート検索",

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
