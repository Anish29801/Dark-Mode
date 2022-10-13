const modeArray = ['#f7f2f2','#202124'];
let counter = 0;
function Switch () {
document.body.style.backgroundColor = modeArray[(counter%2)]; 
if(counter%2 == 1){
document.querySelector('.Header').innerHTML = 'Dark Mode';
document.querySelector('.Header').style.color = '#f7f2f2';
}
else{
    document.querySelector('.Header').innerHTML = 'Light Mode';
    document.querySelector('.Header').style.color = '#202124';

}
let image = String((counter%2)+1)+ '.png';
document.querySelector(".Img").src=image;
counter++;
}
Switch()