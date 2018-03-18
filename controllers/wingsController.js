var express = require('express');
var router = express.Router();
var db = require("../models");


// Home request - Show all wings and where handlebars filters them based on devoured
router.get("/", (req,res) => {
    //find all from db
    db.Wing.findAll({}).then( (data) => {
        var hbsObject = {
            wings: data
          };
        res.render("index", hbsObject);
    })
});

//Save new wing to data base 
router.post("/api/add", (req,res)=> {
    //create wing
    db.Wing.create({wings_name: req.body.wingFlavor, devoured: req.body.eaten}).then( (data) =>{
    res.send("data added");
    })
});

// Update devoured when eaten clicked utlizing put request and sequelize update
router.put("/api/update", (req,res) => {
    db.Wing.update({devoured: req.body.eaten}, {where: {id: req.body.id}}).then( (data) =>res.send("updated"+ data) )
});



// Export routes for server.js to use.
module.exports = router;


