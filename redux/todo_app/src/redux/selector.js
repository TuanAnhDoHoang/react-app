function checkStatus(selected, status) {
    if (status === 'All') return true;
    else if (selected === true && status === 'Completed') return true;
    else if (selected === false && status === 'Todo') return true;
    else return false;
}
export const todoListSelector = (state) => {
    const todoListRemain = state.TodoList.filter((todo) => {
        return todo.name.includes(state.Filter.search) && checkStatus(todo.selected, state.Filter.status);
    });
    return todoListRemain;
};
export const checkedTodoSelector = (state) => state.TodoList.map((todo) => todo.selected);
