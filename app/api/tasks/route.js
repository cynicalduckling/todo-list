import Task from "@/models/task"
import User from "@/models/user";
import dbConnect from "@/utils/mongoConnect";

await dbConnect()

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const userid = searchParams.get('userid')
    console.log("userid ----->>>>>>>>>>", userid)
    const user = await User.findById({ _id: userid });
    const tasks = await Task.find({ author: userid });
    return Response.json({ tasks, username: user.username })
}