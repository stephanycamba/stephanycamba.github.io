const open= document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const close= document.getElementById('close');

open.addEventListener('click', () =>{
  modal_container.classList.add('show');
});
close.addEventListener('click', () =>{
  modal_container.classList.remove('show');
});


// Taken from https://jsfiddle.net/snowMonkey/f1zav0ge/ and also originally on https://stackoverflow.com/questions/47798971/several-modal-images-on-page
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close2")[0];

span.onclick = function() {
  modal.style.display = "none";
}
