console.log('Loaded!');
//TO CHANGE THE TEXT
//var element=document.getElementById("maintxt");
//element.innerHTML='new value';

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

//counter code
var button=document.getElementById("button");
button.onclick()=function()
{
    //create request variable
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadyStateChange=function()
    {
        if(request.raedystate===XMLRequest.DONE)
        {
            //take some action
            if(request.status==200)
            {
                var counter=request.responseText;
                var span= Document.getElementById("count");
                span.innerHTML= counter.toString();
            }
        }
    }
    //not yet done
};


//make a request
request.open('GET','http://ashcopoci.imad.hasura-app.io/count1',true)
request.send(null);
    
}