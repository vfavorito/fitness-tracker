const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    // totalDuration: {
    //     type:Number
    // }
},
{
    timestamps:true
});

WorkoutSchema.virtual("totalDuration").get(function(){
    let minutes = 0;
    this.totalDuration = this.exercises.forEach(exercise => minutes = minutes + exercise.duration);
    return this.totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;