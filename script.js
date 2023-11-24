/**
 * Filename: script.js
 * Project: Lamha website
 * Date: 17/11/2023
 * Author: Lubna Khawa
 * Description: This script provides the necessary functionality for the website.
 */


// Change the product's Image color 

document.getElementById('product-image').addEventListener('mouseover', function() {
    this.style.filter = 'grayscale(100%)';
   });
   
   document.getElementById('product-image').addEventListener('mouseout', function() {
    this.style.filter = 'grayscale(0%)';
   });


// the Burger menu on Responsive screen 

document.querySelector('.burger-menu-icon').addEventListener('click', function() {

    var menu = document.getElementById('side-menu')
    menu.style.display = 'flex';


    
});

document.querySelector('.close-menu').addEventListener('click', function() {

    var menu = document.getElementById('side-menu')
    menu.style.display = 'none';

});


// main banner image

   let slideIndex = 0;
   showSlides();
   
   function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
       slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
   }

   // banner slide buttons 

   function next() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
       slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";

   }

   
// button see more responsive 

function seeMoreNew(){
   var items = document.querySelectorAll('.products1');
    var button_flag = 0 ;

    for (var i = 2; i < items.length; i++) {
       items[i].style.display = items[i].style.display === 'none' ? 'flex' : 'none';
       button_flag += 1 ; 
    }
}

function seeMoreSale(){
   var items = document.querySelectorAll('.products2');
    var button_flag = 0 ;

    for (var i = 2; i < items.length; i++) {
       items[i].style.display = items[i].style.display === 'none' ? 'flex' : 'none';
       button_flag += 1 ; 
    }
}
// daily section button 
function seeMoreDaily(){
   var items = document.querySelectorAll('.products3');
    var button_flag = 0 ;

    for (var i = 2; i < items.length; i++) {
       items[i].style.display = items[i].style.display === 'none' ? 'flex' : 'none';
       button_flag += 1 ; 
    }
}
// work section button
function seeMoreWork(){
   var items = document.querySelectorAll('.products4');
    var button_flag = 0 ;

    for (var i = 2; i < items.length; i++) {
       items[i].style.display = items[i].style.display === 'none' ? 'flex' : 'none';
       button_flag += 1 ; 
    }
}

// winter section button
function seeMoreWinter(){
   var items = document.querySelectorAll('.products5');
    var button_flag = 0 ;

    for (var i = 2; i < items.length; i++) {
       items[i].style.display = items[i].style.display === 'none' ? 'flex' : 'none';
       button_flag += 1 ; 
    }
}

// tarhat section button
function seeMoreTarhat(){
   var items = document.querySelectorAll('.products6');
    var button_flag = 0 ;

    for (var i = 2; i < items.length; i++) {
       items[i].style.display = items[i].style.display === 'none' ? 'flex' : 'none';
       button_flag += 1 ; 
    }
}

// neqabat section button
function seeMoreNeqabat(){
   var items = document.querySelectorAll('.products7');
    var button_flag = 0 ;

    for (var i = 2; i < items.length; i++) {
       items[i].style.display = items[i].style.display === 'none' ? 'flex' : 'none';
       button_flag += 1 ; 
    }
}



// The second banner auto slide

let slideIndexBanner = 0;
showSlidesBanner();

function showSlidesBanner() {
 let i;
 let slides = document.getElementsByClassName("slidex");
 for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
 }
 slideIndexBanner++;
 if (slideIndexBanner > slides.length) {
   slideIndexBanner = 1;
 }
 slides[slideIndexBanner - 1].style.opacity = "1";
 setTimeout(showSlidesBanner, 5000); // Change image every 5 seconds
}
