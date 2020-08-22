function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

var titleBackground = document.querySelector(".Title");
var titleText = document.querySelector(".title_color") ;
var box = document.querySelectorAll(".box") ;
var result = document.querySelector("#result") ;
var newGameStart = document.querySelector("#new_color") ;


var selected = 0 ;


function newGame() {
    result.textContent = "" ;
    var color = getRandomColor() ;
    
    selected = Math.floor(Math.random() * 6) ;
    box[selected].style.background = color ;
    titleText.textContent = box[selected].style.background.toUpperCase();

    for(var i = 0 ; i<box.length ; i+=1){
        if (i!=selected) { 
            do {
                box[i].style.background = getRandomColor() ;
            }while(box[i].style.background == color ) ;
            
        }
        
    }
} 
newGame() ;

function checkGame ( temp)
{
    if (temp === box[selected] ){
        result.textContent = "Correct" ;
        for(var i = 0 ; i<6 ; i+=1){
            box[i].style.background = box[selected].style.background ; 
        }
    }
    else {
        result.textContent = "Try Again" ;
        temp.style.background = "darkgray" ;
    }
}
newGameStart.addEventListener("click" , () => {
    newGame() ;
} ) ;

var allBoxs = document.querySelector(".boxs") ;
allBoxs.addEventListener("click" , doSomething ) ;

function doSomething(e) {
    if (e.target !== e.currentTarget ) {
        var clickedItem = e.target.id ; 
        checkGame(document.querySelector("#"+clickedItem)) ;
    }
}

