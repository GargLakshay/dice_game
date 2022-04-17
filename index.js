var no1=Math.ceil(Math.random()*6);
var image1="images/dice"+no1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);




var no2=Math.ceil(Math.random()*6);
var image2="images/dice"+no2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);


if(no1>no2)
{
  document.querySelector("h1").innerHTML="player 1 wins!!";
}
if(no1===no2)
{
  document.querySelector("h1").innerHTML="draw!!";
}
if(no1<no2)
{
  document.querySelector("h1").innerHTML="player 2 wins!!";
}
