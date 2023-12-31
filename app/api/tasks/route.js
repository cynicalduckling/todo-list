import Task from "@/models/task"
import User from "@/models/user";
import dbConnect from "@/utils/mongoConnect";

await dbConnect()

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const userid = searchParams.get('userid')
    console.log("getUserTasks: getting user object")
    const user = await User.findById({ _id: userid });
    console.log("getUserTasks: got user object")
    console.log("getUserTasks: getting user tasks")
    const tasks = await Task.find({ author: userid });
    console.log("getUserTasks: got user tasks")
    return Response.json({ tasks, username: user.username })
}