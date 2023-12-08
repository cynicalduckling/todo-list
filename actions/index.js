"use server";

import { redirect } from "next/navigation";
import User from "@/models/user";
import Task from "@/components/Task";

export const getTasks = async (formData) => {
    const username = formData.get("username")
    let user = await User.findOne({ username: username })
    if (!user) {
        user = await User.create({ username: username })
    }
    redirect(`/${user._id}`)
}
