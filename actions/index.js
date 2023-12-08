"use server";

import { redirect } from "next/navigation";
import User from "@/models/user";
import Task from "@/models/task";
import { revalidatePath } from "next/cache";

export const getTasks = async (formData) => {
    const username = formData.get("username")
    console.log(username)
    let user = await User.findOne({ username: username })
    if (!user) {
        user = await User.create({ username: username })
    }
    redirect(`/${user._id}`)
}

export const deleteTask = async (taskId, userid) => {
    const task = await Task.findByIdAndDelete(taskId)
    revalidatePath(`${userid}`)
}

