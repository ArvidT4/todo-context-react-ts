import {ITask} from "../interfaces.ts";
import {useMyContext} from "../Contexts/TodoListContext.tsx";
interface Props {
    task:ITask;
    completeTask(taskNameToDelete:string):void;
}
const TodoTask=({task}:Props)=>{
    const {completeTodo}=useMyContext()

    return (
        <div className="task">
            <div className={"content"}>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={()=>completeTodo(task.taskName)}>X</button>
        </div>
    );
}

export default TodoTask;