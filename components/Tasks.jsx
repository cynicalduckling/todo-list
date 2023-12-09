import { tasks } from "@/lib/tasks";
import Task from "./Task";

const Tasks = ({ className, children }) => {
  return (
    <div
      className={className + " self-stretch overflow-hidden pt-2 lg:flex-wrap"}
    >
      {children}
    </div>
  );
};
export default Tasks;
