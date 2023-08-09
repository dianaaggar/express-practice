
const express = require("express")
//------- brigning in express/ import 

const app = express()
//--- connect express instance to the variable 'app'

const PORT = 300
// -------- create routes on path/REST



app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const items = ["shoes", "bags", "clothes", "baby clothes", "baby shoes", "baby toys", "books", "makeup", "parfums", "foods", "movies"];


app.get('/',(req,res)=>{
    res.send("<h1> Hello Word! </h1>")
})

app.get('/home',(req,res)=>{
    res.render("Home");
})


app.get('/about',(req,res)=>{
    res.render("About");
})

app.get('/contact',(req,res)=>{
    res.render("Contact");
})
app.get('/favorite',(req,res)=>{
    res.render("Favorite");
})

app.get("/:indexOfItemsAarray",(req, res)=>{
    if(items[req.params.indexOfItemsAarray]) {
        res.send(items[req.params.indexOfItemsAarray] + " is my faorite item");
    } else {
        res.send("there is no item with this index");
        + req.params.indexOfItemsAarray
    }
});




app.listen(PORT, (req, res)=> {
    console.log(`Server listening on Port ${PORT}`);
});

// create the server based on port value 


