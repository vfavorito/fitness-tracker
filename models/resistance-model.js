const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
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

  weight: {
    type: Number,
    min: 1,
  },

  sets: {
    type: Number,
    min: 1,
  },

  reps: {
    type: Number,
    min: 1,
  },

  duration: {
    type: Number,
    min: 1,
  },
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;