import { tasks } from "@/lib/tasks";
import Task from "./Task";

const Tasks = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
export default Tasks;
