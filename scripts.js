// JavaScript source code

///window.onload = function() {
//      alert("Page has loaded!");
//    };

const photos = ['./photos/Mike.jpg', './photos/AppPhoto.png', './photos/MikeComputer.jpg'];
const whatevers = ['btnPrev', 'btnNext'];
const buttons = [];
whatevers.forEach(function (whatever) {
    buttons.push(document.getElementById(whatever));
})

let currentIndex = 0; 
let arrLength = photos.length - 1;
let imageElement = document.getElementById("currentImage");
let btnNext = document.getElementById("btnNext");
let btnPrev = document.getElementById("btnPrev");

const keyPlay = function (event) {
    event.target.style.backgroundColor = 'lightblue';
}

const keyRelease = function (event) {
    event.target.style.backgroundColor = '';
}

let eventAssignment = function (button) {
    //alert("Page has loaded!");
    button.onmousedown = function () {
        keyPlay(event);
    }
    button.onmouseup = function () {
        keyRelease(event);
    }
}

buttons.forEach(eventAssignment);

btnNext.disabled = false;
btnPrev.disabled = true;


function updateImage() {     
    imageElement.src = photos[currentIndex];
    updateButtons(currentIndex);
  }

function showNextImage() {   
    currentIndex = (currentIndex + 1);
    updateImage();
    
  }

  function showPreviousImage() {   
    currentIndex = (currentIndex - 1);
    updateImage();   
}

function updateButtons(index) {
   
    switch (index) {
        case 0:
            btnPrev.disabled = true;            
            break;
        case arrLength:
            btnNext.disabled = true;
            break;
        default:
            btnPrev.disabled = false;
            btnNext.disabled = false;
    }

}