var n1 = Math.floor((Math.random() * 6)+1);
var randomdiceImg="dice"+n1+".png";
var randomdizimgSrc=randomdiceImg;
document.querySelectorAll("img")[0].setAttribute("src",randomdizimgSrc);

var n2=Math.floor((Math.random()*6)+1);
var randomdiceImg2="dice"+n2+".png";
document.querySelector