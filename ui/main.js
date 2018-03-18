

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

var nameInput = document.getElementById('name');
var name1 = nameInput.value;
var submit = document.getElementById('submitbtn');
submit.onclick = function () {
    //make request to server and send the name

    //capture a list of names and render it as a list
    var names = ['name1', 'name2', 'name3'];
    var list = '';
    for (var i = 0; i < names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
