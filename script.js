'use strict';

/* Add Event Element */
const addEventOnElem = function(elem,type,callback)
{
    if(elem.length > 1)
    {
        for(let i=0; i < elem.length ; i++)
        {
            elem[i].addEventListener(type , callback);
        }
    }
    else
    {
        elem.addEventListener(type,callback);
    }
}

/* Navbar Toggle */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const togglerNav = function()
{
    navbar.classList.toggle("active");
    navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler , "click" , togglerNav);

const closeNav = function()
{
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks ,"click" ,closeNav);

/* Header Active */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll" ,function()
{
    if(window.scrollY >=100)
    {
        header.classList.add("active");
    }
    else
    {
        header.classList.remove("active");
    }
});