import { tasks } from "@/lib/tasks";
import Task from "./Task";

const Tasks = () => {
  return (
    <div>
      <div className="text-center mb-4">Tasks seerver component</div>
      {tasks.map((task) => {
        return <Task className="mb-2 text-center" key={task.id} task={task} />;
      })}
    </div>
  );
};
export default Tasks;
