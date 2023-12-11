"use server";

import { redirect } from "next/navigation";
import User from "@/models/user";
import Task from "@/models/task";
import { revalidatePath } from "next/cache";
import dbConnect from "@/utils/mongoConnect";
import { UsernameSchema } from "@/models/zodschemas"


export const getOrCreateUser = async (username) => {
    const usernameCheck = UsernameSchema.safeParse(username);
    if (!usernameCheck.success) {
        return { "error": usernameCheck.error.issues.map((issue) => issue.message).join(" and ") }
    }
    console.log("getOrCreateUser action: username validation passed")
    await dbConnect();
    console.log("getOrCreateUser action: checkng if user exists")
    let user = await User.findOne({ username: username })

    if (!user) {
        user = await User.create({ username: username })
        console.log("getOrCreateUser action: user doesnt exist. crerating new user")
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
    console.log(todo)
    const task = await Task.findByIdAndUpdate(todo.taskId, { completed: todo.completed })
    console.log(task)
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


