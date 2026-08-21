import { createSlice,nanoid } from "@reduxjs/toolkit";  // nanoid for generating new unique ids everytime a new value/array etc is created
// ek initial state declare karte hain starting mein
const initialState = {
    todos:[{id: 1,text:"Hello World"}]
}

// function sayHello(){
//     console.log("Hello, World!");
// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // addTodo: sayHello 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        }, 
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if(existingTodo){
                existingTodo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer; 