import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash'

const initialState = {
    list: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Date.now(),
                checked: false,
                todo: action.payload,
            };
            state.list = [todo, ...state.list]
        },
        removeTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload.id);
        },
        toggleCheckTodo: (state,  action) => {
            const list = state.list.map(todo => {
                if (todo.id === action.payload.id){
                    todo.checked = action.payload.checked
                }
                return todo
            })
            state.list = _.sortBy([...list], ['checked', 'id'])
        }
    },
});

export const { addTodo, removeTodo, toggleCheckTodo } = todoSlice.actions;

export default todoSlice.reducer;