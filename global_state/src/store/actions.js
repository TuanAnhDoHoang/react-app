import { SET_TODO_INPUT, ADD_TODO, CLEAR_TODO, REMOVE_TODO } from "./contants";

export const setToDoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});
export const addToDo = () => ({
    type: ADD_TODO
});
export const clearToDo = () => ({
    type: CLEAR_TODO
})
export const removeToDo = (id) => ({
    type: REMOVE_TODO,
    idRemoved: id,
})

