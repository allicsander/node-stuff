const express = require('express');

const app = express();

app.use((req, res, goOn) => {
    console.log('first middleware!');
    goOn();
});

app.use((req, res, next) => {
   console.log('second middleware!'); 
   res.send('<h1> yummy stuff </h1>');
});


app.listen(3000);


