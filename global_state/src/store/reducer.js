import { actions } from ".";
import { ADD_TODO, CLEAR_TODO, REMOVE_TODO, SET_TODO_INPUT } from "./contants";

const initState = {
    todos: [],
    todoInput: '',
}
function reducer(state, action){
    switch(action.type){
        case SET_TODO_INPUT:
            return {
                ... state,
                todoInput:action.payload,
            }
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, state.todoInput],
                todoInput: ''
            }
        case REMOVE_TODO:
            return{
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.idRemoved)
            }
        case CLEAR_TODO:
            return{
                todos:[],
                todoInput: ''
            }

        default:
            throw new Error("Invalid action");
    }
}
export {initState}
export default reducer;