var express = require('express');
var router = express.Router();
const serviceModel = require("./services");
var app = express();


//Route to load and display the frontend for add service
router.get("/addservice", function(req,res) {
    res.render("add_service");
});

//Route to add a new service in the database
router.post("/addservice", async (req,res) => {
    const {name, price, description} = req.body;
    if(!name || !price || !description){
        return res.status(400).send('Service name, price and description are required');
    }
    if(price<=0)
        res.status(400).send('Price must be a positive number');
    else{
    try{
        const service = new serviceModel({name, description, price});
        await service.save();
        res.status(201).send('service saved successfully');
    }
    catch(err){
        res.status(500).send("An error occured");
    }
}
});


//Route to fetch all the services on the list
router.get("/allservice", async (req,res) => {
    try{
        const allservice = await serviceModel.find();
        res.json(allservice);
    }
    catch(err){
        res.status(500).send("An error occured");
    }
});


//Route to load and display the frontend for update service
router.get("/updateservice", function(req,res) {
    res.render("update_service");
});

//Route to update an existing service in the database
router.post("/updateservice", async (req,res) => {
    const name = req.body.name;
    const newname = req.body.newname;
    const newdescription = req.body.newdescription;
    const newprice = req.body.newprice;
    var newdetails = {};
    if(!name)
        res.status(400).send('Name is required');
    if(newname)
        newdetails.name = newname;
    if(newdescription)
        newdetails.description = newdescription;
    if(newprice)
        newdetails.price = newprice;
    try{
        
        const service = await serviceModel.findOneAndUpdate({name : name},newdetails,{new : true});
        if(!service){
            res.status(400).send('Service not found');
        }
        else
            res.status(200).send('Updated successfull');
    }
    catch(err){
        res.status(500).send("An error occured");
    }
});

//Route to load and display the frontend for delete service
router.get("/deleteservice", function(req,res) {
    res.render("delete_service");
});

//Route to delete an existing service in the database
router.post("/deleteservice", async (req, res) => {
    const name = req.body.name;
    if(!name)
        res.status(400).send('Name is required');
    try{
        const service = await serviceModel.findOneAndDelete({name : name});
        if(!service)
            res.status(400).send('Service not found');
        else
            res.status(200).send('Deleted successfull');
    }
    catch(err){
        res.status(500).send('An error occured');
    }
});

module.exports = router;