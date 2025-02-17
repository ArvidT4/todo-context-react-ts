import {FC, useState, ChangeEvent } from "react";
import "./App.css"
import {ITask} from "./interfaces.ts";
import TodoTask from "./Components/TodoTask.tsx";
import Comp from "./Components/Comp.tsx";
import {useMyContext} from "./Contexts/TodoListContext.tsx";


const App:FC = () => {
    const [task,setTask]=useState<string>("");
    const [deadline,setDeadline]=useState<number>(0);
    const {todoList,addTodo} = useMyContext();
    const handleChange = (event:ChangeEvent<HTMLInputElement>):void=>{
        if(event.target.name==="task"){
            setTask(event.target.value)
        }
        else setDeadline(Number(event.target.value))
    }
    const addTask=():void=>{
        const newTask={taskName:task,deadline:deadline};
        addTodo(newTask);
        setTask("");
        setDeadline(0);
    }


  return (
        <>
            <div>
                <Comp></Comp>
                <div className={"header"}>
                    <div className={"inputContainer"}>
                        <input type={"text"} value={task} placeholder={"Task...."} name="task" onChange={handleChange}/>
                        <input type={"number"} value={deadline} placeholder={"Deadline (in days)..."} name="deadline" onChange={handleChange}/>
                    </div>
                    <button onClick={addTask}>Add task</button>
                </div>
                <div className={"todoList"}>
                    {todoList.map((task:ITask, key:number)=>{
                        return <TodoTask key={key} task={task}/>
                    })}
                </div>
            </div>
        </>
  )
}

export default App
