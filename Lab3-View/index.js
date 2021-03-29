const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static("public"))

app.set("view engine", "ejs");

app.use("/api/students", require("./routes/students"))
app.use("/students", require("./routes/studentsViews"))

app.get("/", (req, res)=>{
    res.render("main", {title : "My Students "})
})

app.post("/students", (req, res)=>{
    // console.log(req.body);
    
    //  student.add(req.body);
})


mongoose.connect("mongodb://localhost/Lec", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to mongodb");
}).catch(err => {
    console.log(err);
})


const port = process.env.PORT || 5000
app.listen(port,(err)=>{
    if(!err) console.log(`Listening on port ${port}`);
})