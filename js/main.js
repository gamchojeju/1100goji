/*
=====================================
🌋 Project HALLA
1100 GOJI

Main Javascript
Build 0.3.1
=====================================
*/


document.addEventListener(
    "DOMContentLoaded",
    function(){


        const header = document.querySelector(".header");

        const menuButton = document.querySelector(".menu-button");

        const nav = document.querySelector(".nav");



        /*
        =====================
        Header Scroll
        =====================
        */


        window.addEventListener(
            "scroll",
            function(){


                if(window.scrollY > 80){


                    header.classList.add("scrolled");


                }else{


                    header.classList.remove("scrolled");


                }


            }
        );





        /*
        =====================
        Mobile Menu
        =====================
        */


        if(menuButton){


            menuButton.addEventListener(
                "click",
                function(){


                    this.classList.toggle("active");

                    nav.classList.toggle("active");


                }
            );


        }



    }
);
