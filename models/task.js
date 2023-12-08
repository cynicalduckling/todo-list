// const mongoose = require('mongoose')

// const TaskSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     due_date: Number,
//     completed: Boolean,
//     category: String,
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'users'
//     }
// }, { timestamps: true });

// const Task = mongoose.models.tasks || mongoose.model('tasks', TaskSchema);

// module.exports = Task

import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    due_date: Number,
    completed: Boolean,
    category: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}, { timestamps: true });

const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema)

export default Task;