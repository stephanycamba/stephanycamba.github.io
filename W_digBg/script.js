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



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
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