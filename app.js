const express = require('express');
const app = express();

//middlewares


//Routes
app.get('/', (req,res) => {
    //res.send('Home page');
   res.sendFile("/home/shadowak47/Desktop/Node-projects/newH-calculator/index.html");
})

//start listening on port 3000
app.listen(3000);