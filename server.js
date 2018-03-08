var express = require('express');
var morgan = require('morgan');
var path = require('path');
var counter=0;
var app = express();
app.use(morgan('combined'));

var articles =
{
    'article1':
    {
        title :'Article 1',
        heading :'ARTICLE 1',
        date :'march 3,2018',
        content:
        `<p>hi there!article 1 hi there!article 1hi there!article 1hi there!article 1</p>
            <p>hi there!article 1 hi there!article 1hi there!article 1hi there!article 1</p>
            <p>hi there!article 1 hi there!article 1hi there!article 1hi there!article 1</p>`
    },
    'article2' :
    {
        title :'Article 2',
        heading :'ARTICLE 2',
        date :'march 3,2018',
        content:
        `<p>hi there!article 1 hi there!article 1hi there!article 1hi there!article 1</p>
         <p>hi there!article 1 hi there!article 1hi there!article 1hi there!article 1</p>`
    },
    'article3' :
    {
        title :'Article 3',
        heading :'ARTICLE 3',
        date :'march 3,2018',
        content:
        `<p>hi there!article 1 hi there!article 1hi there!article 1hi there!article 1</p>`
    }
};

function createtemplate(data) {
    var title =data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemplate=
         `<html>
            <head>
                <title>
                    ${title}
                </title>
                <link href="/ui/style.css" ref="stylesheet" />
            </head>
            <body>
                <a href="\">HOME</a>
                <hr>
                <h1>${heading}</h1>
                <div>
                    ${date}
                </div>
                ${content}
                
            </body>
        </html>
        `;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});


app.get('/count',function(req,res){
    counter=counter + 1;
    res.send(counter);
});

app.get('/ui/main.js',function(req,res) {
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/article3',function(req,res){
     res.sendFile(path.join(__dirname,'ui','article3.html'));

});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
