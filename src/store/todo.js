import { createSlice } from "@reduxjs/toolkit";
import {getTodo} from "../api/todo";

const initialState = {
    list: [],
    isLoading: true,
    isUninitialized: true
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            const todo = {
                id: Date.now(),
                checked: false,
                title: payload,
            };
            state.list = [todo, ...state.list]
        },
        removeTodo: (state, {payload}) => {
            state.list = state.list.filter((todo) => todo.id !== payload.id);
        },
        toggleCheckTodo: (state, {payload}) => {
            const list = state.list.map(todo => {
                if (todo.id === payload.id){
                    todo.checked = payload.checked
                }
                return todo
            })
            state.list = [...list]
        },
        initTodo: (state, {payload}) => {
            state.list = [...payload]
            state.isUninitialized = false
            state.isLoading = false
        },
        toggleLoadingTodo: (state) => {
            state.isLoading = !state.isLoading
        }
    },
});

export const initTodoAsync = () => async (dispatch) => {
    try {
        const data = await getTodo()
        dispatch(initTodo(data));
    } catch (err) {
        throw new Error(err);
    }
};

export const { addTodo, removeTodo, toggleCheckTodo, toggleLoadingTodo, initTodo } = todoSlice.actions;

export default todoSlice.reducer;