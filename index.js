const express=require('express');
const app=express();
app.use(express.static(__dirname));
app.use(express.static("public"));

const port =3000;

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.listen(port, function(){      //our local server at port 3000
    console.log("Server started on port 3000...");
});