"use server";

import { redirect } from "next/navigation";
import User from "@/models/user";
import Task from "@/models/task";
import { revalidatePath } from "next/cache";
import dbConnect from "@/utils/mongoConnect";
import { UsernameSchema } from "@/components/App"


export const getOrCreateUser = async (username) => {

    await dbConnect();
    let user = await User.findOne({ username: username })

    if (!user) {
        user = await User.create({ username: username })
    }
    redirect(`/${user._id}`)
}

export const deleteTask = async (taskId, userid, completed) => {
    await dbConnect();
    const task = await Task.findByIdAndDelete(taskId)
    revalidatePath(`/${userid}`)
}

export const completeTask = async (todo) => {
    await dbConnect();
    const task = await Task.findByIdAndUpdate(todo.taskId, { completed: todo.completed })
    revalidatePath(`/${todo.userid}`)
}

export const updateTask = async ({ taskId, name, category, due_date, userid }) => {
    await dbConnect();
    const task = await Task.findByIdAndUpdate(taskId, { name, category, due_date })
    revalidatePath(`/${userid}`)
}

export const addTask = async (userid, formData) => {
    await dbConnect();
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


