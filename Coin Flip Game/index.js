var randomNum = Math.floor(Math.random() * 10) + 1; 
var randomNum2 = Math.floor(Math.random() * 10) + 1;

const button = document.querySelector('button'); 

button.onclick = function () {
    if(randomNum > randomNum2){
        document.querySelector('h1').textContent = "Its a Head!"; 
        document.querySelector('img').setAttribute("src", "https://cdn.pixabay.com/photo/2013/07/12/14/27/bronze-148228_960_720.png")
    }
    else{
        document.querySelector('h1').textContent = "Its a Tail!"; 
        document.querySelector('img').setAttribute("src","http://www.clker.com/cliparts/4/a/2/6/1393621733287511319tails-md.png" )
    }
};
