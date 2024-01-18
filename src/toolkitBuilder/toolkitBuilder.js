import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: ['купить квартиру', "купить машину", 'купить дом']
}

export const inc = createAction('INC');
export const dec = createAction('DEC');
export const addTodo = createAction('ADDTODO');
export const removeTodo = createAction('REMOVETODO');

const toolkitBuilder = createReducer(initialState,(builder)=>{
  builder
    .addCase(inc,(state,action)=> {
      state.count = state.count + 1
    })
    .addCase(dec,(state,action)=> {
      state.count = state.count - 1
    })
    .addCase(addTodo,(state,action)=> {
      state.todos.push(action.payload)
    })
    .addCase(removeTodo,(state,action)=> {
      state.todos.pop()
    })
})

export const addAsyncTodo = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(removeTodo())
  }, 2000)
}

export default toolkitBuilder
