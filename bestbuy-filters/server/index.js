const express = require('express');
const mongoose = require('mongoose');
const app = express();

const AirFryerModel = require("./models/airfryer");

//This will allow us to receive information from the frontend in json format
app.use(express.json());

mongoose.connect(
    "mongodb+srv://bestbuy:bestbuy@bestbuybasicapp.uamcq.mongodb.net/bestbuybasic?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);

app.get('/', async (req, res) => {
    const BestBuyBasicApp = new AirFryerModel({
        airFryerTitle:"Insignia Air Fryer",
        capacity: 5
    });
    try{
        await BestBuyBasicApp.save();
    }catch(err){
        console.log(err)
    }
})

app.listen(3001, () => {
    console.log('Server running on port 3001...')
});