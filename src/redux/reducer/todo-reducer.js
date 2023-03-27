import {ADD_TODO,UPDATE_TODO,DELETE_TODO} from '../Action/action-type'

const initialState = [];
export default (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case ADD_TODO:
            // add logic
            console.log("add to do"); 
            console.log(action.payload.id);

            return [...state, action.payload]
        case UPDATE_TODO:
            // update logic
            const updateState = state.map(todo => {
                if (todo.id === action.payload.todoId) {
                    todo.title = action.payload.todo.title;
                    todo.description = action.payload.todo.description;
                    return todo;
                }
                return todo;

            })
            return updateState;
        case DELETE_TODO:
            // delete logic
            const newState = state.filter((todo) =>
              todo.id !== action.payload )
            return newState;
        default:
            return state;
    }
}