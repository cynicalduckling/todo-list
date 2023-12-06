"use server";

import { redirect } from "next/navigation";
import User from "@/models/user";

export const getTasks = async (formData) => {
    const username = formData.get("username")
    const user = await User.findOne({ username: username })
    if (!user) (await User.create({ username: username }))
    redirect(`/${username}`)
}