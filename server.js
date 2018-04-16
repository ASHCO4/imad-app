var express = require('express');
var morgan = require('morgan');
var path = require('path');
var counter=0;
var app = express();
var Pool=require('pg').Pool;
var crypto=require('crypto');
app.use(morgan('combined'));

var config={
    user:'ashcopoci',
    database:'ashcopoci',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD,
};
var pool=new Pool(config);

function hash(input,salt)
{
    var hashed=crypto.pbkdf25ync(input,salt,10000,512,'sha512');
    return("pbkdf25","10000",salt,hashed.toString('hex'));
}

app.get('/hash/:input',function(req,res)
{
    var hashedString=hash(req.params.input,'this-is-some-random-string');
    res.sent(hashedString);
});

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
                    ${date.toDateString()}
                </div>
                ${content}
                
            </body>
        </html>
        `;
return htmltemplate;
}

app.get('/test-db',function(req,res){
    //make select req and response with results
    pool.query('SELECT * FROM TEST',
    function(err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result.rows));
        }
    });
});
var names = [];
app.get('/submit-name', function (req, res) {//url =submit-name?query
    var name = req.query.name;

    names.push(name);

    res.send(JSON.stringify(names));
});

app.get('/count1',function(req,res){
    counter=counter + 1;
    res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article/:articleName',function(req,res){
    //articlename==article-one
    //article[articlename]=={}content object for article one
    
    pool.query("SELECT * FROM article WHERE title= $1",[req.params.articleName],
    function(err,result){
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            if(result.rows.length===0)
            {
                res.status(404).send('Article not found');
            }
            else
            {
                var articleData=result.rows[0];
                res.send(createtemplate(articleData));
            }
        }
    });
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
