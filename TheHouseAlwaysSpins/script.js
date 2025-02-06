const open= document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const close= document.getElementById('close');

open.addEventListener('click', () =>{
  modal_container.classList.add('show');
});
close.addEventListener('click', () =>{
  modal_container.classList.remove('show');
});





let slideIndex = 1;
showSlides(slideIndex);

let slideIndex2 = 1;
showSlides2(slideIndex2);

let slideIndex3 = 1;
showSlides3(slideIndex3);

let slideIndex4 = 1;
showSlides4(slideIndex4);
let slideIndex5 = 1;
showSlides5(slideIndex5);


// Next/previous controls


function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}


// Thumbnail image controls

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("theSlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("theSlides2");
  let dots = document.getElementsByClassName("demo2");
  let captionText = document.getElementById("caption2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
  captionText.innerHTML = dots[slideIndex2-1].alt;
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("theSlides3");
  let dots = document.getElementsByClassName("demo3");
  let captionText = document.getElementById("caption3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
  captionText.innerHTML = dots[slideIndex3-1].alt;
}

function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("theSlides4");
  let dots = document.getElementsByClassName("demo4");
  let captionText = document.getElementById("caption4");
  if (n > slides.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex4-1].style.display = "block";
  dots[slideIndex4-1].className += " active";
  captionText.innerHTML = dots[slideIndex4-1].alt;
}

function showSlides5(n) {
  let i;
  let slides = document.getElementsByClassName("theSlides5");
  let dots = document.getElementsByClassName("demo5");
  let captionText = document.getElementById("caption5");
  if (n > slides.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex5-1].style.display = "block";
  dots[slideIndex5-1].className += " active";
  captionText.innerHTML = dots[slideIndex5-1].alt;
}