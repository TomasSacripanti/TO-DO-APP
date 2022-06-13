import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    state: {type: Number, required: true},
    date: {type: Date, required: true},
});

export default mongoose.model('Task', TaskSchema);