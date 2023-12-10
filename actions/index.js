"use server";

import { redirect } from "next/navigation";
import User from "@/models/user";
import Task from "@/models/task";
import { revalidatePath } from "next/cache";

export const getTasks = async (formData) => {
    console.log("running the server action")
    const username = formData.get("username")
    console.log("got the form data")
    console.log("starting mongo calls")
    let user = await User.findOne({ username: username })
    if (!user) {
        user = await User.create({ username: username })
    }
    redirect(`/${user._id}`)
}

export const deleteTask = async (taskId, userid, completed) => {
    const task = await Task.findByIdAndDelete(taskId)
    revalidatePath(`/${userid}`)
}

export const completeTask = async (todo) => {
    const task = await Task.findByIdAndUpdate(todo.taskId, { completed: todo.completed })
    revalidatePath(`/${todo.userid}`)
}

export const updateTask = async ({ taskId, name, category, due_date, userid }) => {
    const task = await Task.findByIdAndUpdate(taskId, { name, category, due_date })
    revalidatePath(`/${userid}`)
}

export const addTask = async (userid, formData) => {
    console.log(userid)
    const task = {
        name: formData.get("name"),
        due_date: Date.parse(formData.get("due_date")),
        category: formData.get("category"),
        completed: false,
        author: userid
    }
    const addedTask = await Task.create(task)
    revalidatePath(`/${task.author.userid}`)
}


