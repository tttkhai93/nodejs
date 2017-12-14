const hbs = require('hbs');
const express = require('express');
const fs = require('fs');

var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

hbs.registerPartials(__dirname + "/views/partials" );
app.use(express.static(__dirname + '/public'));

// app.use((req, res, next)=>{
//   var now = new Date().toString();
//   var log = `${now}: ${req.method} ${req.url}`;
//   console.log(log);
//   fs.appendFile('server.log', log, (err)=>{
//     if(err){
//       console.log('Unable to append it');
//     }
//   });
//   next();
// });

hbs.registerHelper('currentYear', ()=>{
  return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

app.get('/', (req, res)=>{
  res.render('home.hbs', {
    titlePage: "Welcome to this Website"
  });
});


app.get('/about', (req, res)=>{
  res.render('about.hbs', {
    titlePage: 'About page'
  });
});

app.listen(port, ()=>{
  console.log('Server is up on port '+ port);
});
// `${port}`
