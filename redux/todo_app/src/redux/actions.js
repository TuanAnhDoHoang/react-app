import { createAction } from '@reduxjs/toolkit';
const addTodoList = createAction('todoList/addTodoList', function prepare(data) {
    return {
        payload: data,
    };
});
const checkTodo = createAction('todoList/checkTodo', function prepare(data) {
    return {
        payload: data,
    };
});
const searchPattern = createAction('filter/searchPattern', function prepare(data) {
    return {
        payload: data,
    };
});
const checkCompleted = createAction('filter/checkCompleted', function prepare(data) {
    return {
        payload: data,
    };
});
const searchPiority = createAction('filter/searchPiority', function prepare(data) {
    return {
        payload: data,
    };
});
export { addTodoList, checkTodo, searchPattern, checkCompleted, searchPiority };
