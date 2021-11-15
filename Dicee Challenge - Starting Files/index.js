
var no=Math.floor(Math.random()*6)+1;
var dice="dice"+no+".png";
var imgsrc="images/"+dice;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgsrc);


var no2=Math.floor(Math.random()*6)+1;
var dice2="dice"+no2+".png";
var imgsrc2="images/"+dice2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgsrc2);

if(no>no2)
{
    document.querySelector("h1").innerHTML="Player1 win";
}
else if(no===no2)
{
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player2 win";
}
