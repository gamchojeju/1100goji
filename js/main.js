/*
=====================================
🌋 Project HALLA
1100 GOJI

Main Javascript
Build 0.3
=====================================
*/


document.addEventListener(
    "DOMContentLoaded",
    function(){



        const header = document.querySelector(".header");

        const logo = document.querySelector(".logo");

        const navLinks = document.querySelectorAll(".nav a");



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



    }
);
