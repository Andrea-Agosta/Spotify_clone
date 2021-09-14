const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use('/public/', express.static('./public'));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/premium", function(req, res) {
    res.render("premium");
});

app.get("/legal/premium-promotional-offer-terms", function(req, res) {
    res.render("legal/premium-promotional-offer-terms");
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});
