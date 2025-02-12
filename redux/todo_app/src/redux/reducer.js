import { createReducer } from '@reduxjs/toolkit';
import { addTodoList, checkTodo, searchPattern, checkCompleted, searchPiority } from './actions';
import { genActionStyle } from 'antd/es/alert/style';
const defaultString = '';
const defaultTodoList = [
    {
        id: 1,
        name: 'Learn React',
        piority: 'High',
        selected: false,
    },
    {
        id: 2,
        name: 'Learn Redux',
        piority: 'Medium',
        selected: false,
    },
    {
        id: 3,
        name: 'Learn JavaScript',
        piority: 'Low',
        selected: false,
    },
];

const initialStates = {
    Filter: {
        search: defaultString,
        status: 'All',
        priority: [],
    },
    TodoList: defaultTodoList,
};

export const rootReducer = createReducer(initialStates, (builder) => {
    builder
        .addCase(addTodoList, (state, action) => {
            state.TodoList.push(action.payload);
        })
        .addCase(checkTodo, (state, action) => {
            state.TodoList[action.payload.index].selected = action.payload.selectState;
        })
        .addCase(searchPattern, (state, action) => {
            state.Filter.search = action.payload.pattern;
        })
        .addCase(checkCompleted, (state, action) => {
            state.Filter.status = action.payload.status;
        })
        .addCase(searchPiority, (state, action) => {
            state.Filter.priority = action.payload.data;
        });
});
