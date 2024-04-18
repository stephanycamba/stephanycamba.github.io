const open= document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const close= document.getElementById('close');

open.addEventListener('click', () =>{
  modal_container.classList.add('show');
});
close.addEventListener('click', () =>{
  modal_container.classList.remove('show');
});





let slideIndex3 = 1;
showSlides3(slideIndex3);


// Next/previous controls


function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}


// Thumbnail image controls


function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
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


