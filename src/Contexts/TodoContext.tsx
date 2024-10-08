import React, {createContext, useState} from 'react'


type TodoContextProviderProps={
    children:React.ReactNode
}
export const TodoListContext = createContext("test")

export const TodoListContextProvider = ({
    children,
}: TodoContextProviderProps)=>{
    return <TodoListContext.Provider value={"test"}>{children}</TodoListContext.Provider>
}
