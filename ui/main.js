console.log('Loaded!');
//TO CHANGE THE TEXT
var element=document.getElementById("maintxt");
element.innerHTML='new value';

//T MOVE ELEMENT

var img=document.getElementById("madi");
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft + 5;
    img.style.marginLeft=marginLeft+ 'px';
}
img.onclick= function()
{
    var interval=setInterval(moveRight,10);
};