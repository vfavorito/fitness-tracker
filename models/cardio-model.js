const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: true,
    },

    name: {
        type: String,
        trim: true,
        required: [true, "Workout Name is required"],
    },

    distance: {
        type: Number,
        min: 1,
    },

    duration: {
        type: Number,
        min: 1,
    },
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;