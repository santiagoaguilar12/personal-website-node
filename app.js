var express     = require("express"),
    app         = express();//needs both parts to use express. 
    
app.set("view engine", "ejs");//uses ejs so that we dont have to write .ejs in views
app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
   res.render("home");
});

app.listen(process.env.PORT, process.env.IP, function(){//starts server. 
    //process.env.PORT--> uses whatever port is in the environment variable PORT 
    //process.env.ID-->uses whatever IP is in the environment variable ID 
    
   console.log("The Server Has Started!");//notnnecesary. just to make sure it starts
});