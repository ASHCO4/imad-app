

//counter code
var button=document.getElementById('buttn');
button.onclick() =function(){
    
    //create request variable
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function()
    {
        if(request.readystate===XMLHttpRequest.DONE)
        {
            //take some action
            if(request.status==200)
            {
                var counter=request.responseText;
                var span= Document.getElementById("count");
                span.innerHTML= counter.toString();
            }
        }
    };
    //not yet done


//make a request
request.open('GET','http://ashcopoci.imad.hasura-app.io/count1',true);
request.send(null);
    
}