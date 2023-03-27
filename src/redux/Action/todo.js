import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-type";
// add todo action 
export  const  addTodo = (todo)=>({
    type:ADD_TODO,
    payload:todo,
})
// delete action todo
 export const deleteTodo=(id)=>({
    type:DELETE_TODO,
    payload:id
 })

 // update  todo action 
  export const  updateTodp = (todo,id)=>({
    type:UPDATE_TODO,
    payload:{todo:todo,todoId:id}
  })