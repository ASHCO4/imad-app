console.log('Loaded!');
//TO CHANGE THE TEXT
var element=document.getElementById("maintxt");
element.innerHTML='new value';

//T MOVE ELEMENT

var marginleft;
var img=document.getElementById("madi")
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+ 'px';
}
img.onclick= function()
{
    var interval=setInterval(moveRight,100);
};