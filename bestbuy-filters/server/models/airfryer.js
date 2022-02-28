const mongoose = require("mongoose");

const AirFryerSchema = new mongoose.Schema({
    airFryerTitle: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
});

const airfryer = mongoose.model("airfryer", AirFryerSchema);
module.exports = airfryer;