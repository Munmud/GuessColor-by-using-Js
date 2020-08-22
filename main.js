var h1 = document.querySelector("h1") ;
var body = document.querySelector("body") ;
var button = document.querySelector("button") ;
var p = document.querySelector("p") ;
var isTrue = true ;

button.addEventListener("click" , ()=> {
    if (isTrue == true){
        p.textContent = "Did you just clicked me ?"
    }
    else {
        p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium quisquam eius reprehenderit ullam laboriosam sit, laborum, magnam natus facilis ipsa rem omnis, necessitatibus assumenda ducimus. Possimus quis numquam culpa!"
    }

    isTrue = isTrue == true ? false : true ;
    
    
});



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  

//   h1.style.color = "black" ;
  
// setInterval(function(){
//     body.style.background = getRandomColor() ;
//     h1.textContent = body.style.background.toString() ;
// },1000) ;
// var sz = 20 ;
// var isIncrease = true ;

// setInterval(() => {
//     h1.style.fontSize = sz + "px" ;
//     if (isIncrease)
//     sz+=1 ; 
//     else sz-=1 ;

//     if (sz == 20) isIncrease = true ;
//     if (sz == 30) isIncrease = false ;
// },40) ;

