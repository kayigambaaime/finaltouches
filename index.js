const express = require('express');
const App = express()

const Port = 5000;


App.listen(()=>{
    console.log(`server listening on port ${Port}`);
    
})