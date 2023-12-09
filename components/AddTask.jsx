import { addTask } from "@/actions";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { FaCircleXmark } from "react-icons/fa6";

const AddTask = ({ userid, setAdd }) => {
  const addTaskUser = addTask.bind(null, userid);
  return (
    <form
      action={addTaskUser}
      className="flex min-w-[330px] max-w-[700px] flex-col flex-wrap items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-green-300 to-purple-400 px-4 py-4 lg:flex-row lg:items-center"
    >
      <div className="flex items-center gap-4 self-stretch">
        <FaCircleXmark
          onClick={() => {
            setAdd(false);
          }}
          className="h-6 w-6  fill-white "
        />
        <input
          type="text"
          name="name"
          className="flex h-10 grow place-content-center justify-between self-stretch rounded-full border border-black bg-transparent px-4 text-black placeholder:text-center placeholder:text-black"
          placeholder="enter task"
        />
      </div>
      <div className="flex justify-between gap-2 self-stretch">
        <input
          type="date"
          name="due_date"
          className="flex flex-1 grow justify-between rounded-full bg-transparent text-black"
          onChange={null}
        />
        <select
          className="flex-1 bg-transparent text-center text-black"
          name="category"
          defaultValue="personal"
          onChange={null}
        >
          <option value="personal">Personal</option>
          <option value="work">Work</option>
        </select>
        <button type="submit" className="btn-addtask">
          add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
