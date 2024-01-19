function getRandom(max=10,min = 0){
   return Math.floor(Math.random() * (max-min)+min);
}

function getColor(){
   let r = getRandom(256);
       g = getRandom(256);
       b = getRandom(256);
   return `rgb(${r},${g},${b}`;
}

document.body.style.background = getColor();