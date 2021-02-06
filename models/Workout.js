const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                trim: true,
              },
            
              name: {
                type: String,
                trim: true,
              },
            
              weight: {
                type: Number,
              },
            
              sets: {
                type: Number,
              },
            
              reps: {
                type: Number,
              },
            
              duration: {
                type: Number,
              },
            
              distance: {
                type: Number,
              },
        }
    ],
});

WorkoutSchema.virtual("totalDuration").get(function(){


});
WorkoutSchema.virtual("day").get(function(){
return new Date().setDate(new Date().getDate())
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;