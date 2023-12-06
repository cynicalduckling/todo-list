import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    due_date: Number,
    completed: Boolean
}, { timestamps: true });

const Task = mongoose.models.tasks || mongoose.model('tasks', TaskSchema);

export default Task