import {ITask} from "../interfaces.ts";
import {createContext, ReactNode, useContext, useState} from "react";

interface TodoListContext{
    todoList:ITask[]
    addTodo:(item:ITask)=>void
    completeTodo:(item:string)=>void
}

const MyContext = createContext<TodoListContext|undefined>(undefined);

const MyProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [todoList,setTodoList] = useState<ITask[]>([])

    function addTodo(todo:ITask):void {
        setTodoList((prevItems)=>[...prevItems,todo])
    }
    const completeTodo =(taskNameDel:string):void=>{
        setTodoList(todoList.filter((task)=>{
            return task.taskName!=taskNameDel
        }))
    }

    return (
        <MyContext.Provider value={{todoList,addTodo,completeTodo}}>
            {children}
        </MyContext.Provider>
    )
}
const useMyContext=()=>{
    const context = useContext(MyContext);
    if(!context){
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context
};
export { MyProvider, useMyContext };