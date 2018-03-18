

//counter code
var button=document.getElementById('buttn');
button.onclick =function(){
    
    //create request variable
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //take some action
            if(request.status==200)
            {
                var counter=request.responseText;
                var span= document.getElementById("count");
                span.innerHTML= counter.toString();
            }
        }
    };
    //not yet done


//make a request
request.open('GET','http://ashcopoci.imad.hasura-app.io/count1',true);
request.send(null);
    
};


var submit = document.getElementById('submitbtn');
submit.onclick = function () {
    //make request to server and send the name
    //create request variable
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //take some action
            if(request.status==200)
            {
                //capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i = 0; i < names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                    }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    //not yet done

var nameInput = document.getElementById('name');
var name = nameInput.value;
//make a request
request.open('GET','http://ashcopoci.imad.hasura-app.io/submit-name?name=' + name,true);
request.send(null);

};
