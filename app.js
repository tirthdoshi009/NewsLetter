const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.listen(3000,function(){
    console.log("I am listening at port 3000");
});