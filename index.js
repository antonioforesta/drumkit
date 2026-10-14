for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {//if a click in detected on the button ----> 

    var buttonInnerHTML = this.innerHTML; // follow "this" and selects the element that triggered addEventListener so var = to that now
       
    makesound(buttonInnerHTML); //<--- MakeaSound is a function (this is triggered if click is detected)
    
    buttonAnimation(buttonInnerHTML);
  });

}

document.addEventListener("keydown", function(event) { //if a key on the keyboard is pressed ----> switch the button continue with the function

    makesound(event.key);//<---- "key" narrows it down to which key exactly

    buttonAnimation(event.key);
});

// makeSound function is placed outside so both event listeners can use it
function makesound(key){

  switch (key){          
    case "w": 
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3'); 
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3'); 
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3'); 
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3'); 
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3'); 
      kick.play();
      break;

    default: 
      console.log(key);
  }
}

function buttonAnimation(currentkey){

 var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

setTimeout(function (){
  
  activeButton.classList.remove("pressed");
            
}, 100); // How long you want the delay to be, measured in milliseconds.

}