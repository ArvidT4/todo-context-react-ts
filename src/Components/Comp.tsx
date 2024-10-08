
import {useMyContext} from "../Contexts/TodoListContext.tsx";

const Comp = () => {
    const {todoList} = useMyContext()
    return (
        <div>{todoList.length}</div>
    )
}
export default Comp