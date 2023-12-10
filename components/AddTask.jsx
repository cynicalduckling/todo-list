import { addTask } from "@/actions";
import { IoMdAddCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";

const AddTask = ({ userid, setAdd }) => {
  const addTaskUser = addTask.bind(null, userid);
  return (
    <form
      action={addTaskUser}
      onSubmit={() => {
        setAdd(false);
      }}
      className="lg:items-cente flex min-w-[330px] flex-col flex-wrap justify-between gap-4 rounded-xl bg-gradient-to-r from-lime-200 via-green-200 to-teal-200 px-4 py-4 shadow-sm shadow-black md:w-[700px] md:flex-row md:justify-between md:gap-4"
    >
      <div className=" flex items-center justify-between gap-2">
        <FaCircleXmark
          onClick={() => {
            setAdd(false);
          }}
          className="h-6 w-6 dark:fill-black"
        />
        <input
          type="text"
          name="name"
          className="flex h-10 basis-1 place-content-center justify-between rounded-full border border-black bg-transparent px-4 text-black placeholder:text-center placeholder:text-black"
          placeholder="enter task"
        />
      </div>
      <div className="flex justify-between md:grow">
        <input
          type="date"
          name="due_date"
          className="rounded-full bg-transparent text-black"
        />
        <select
          className="bg-transparent text-center text-black"
          name="category"
          defaultValue="personal"
        >
          <option value="personal">Personal</option>
          <option value="work">Work</option>
        </select>
        <button type="submit" className="btn-addtask">
          <IoMdAddCircle className="h-7 w-7" />
        </button>
      </div>
    </form>
  );
};

export default AddTask;
