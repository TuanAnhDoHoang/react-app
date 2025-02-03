
function logger(reducer){
    return (prevState, action) => {
        console.log(action.type);
        console.log('Prev State: ', prevState);
        const nextState = reducer(prevState, action);
        console.log('Next State: ', nextState);
        return nextState;
    }
}
export {logger}