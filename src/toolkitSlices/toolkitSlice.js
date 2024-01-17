import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ['купить квартиру', "купить машину", 'купить дом']
  },
  reducers: {
    inc(state) {
      state.count = state.count + 1;
    },
    dec(state) {
      state.count = state.count - 1;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos.pop();
    }
  }
})

export default toolkitSlice.reducer
export const { inc, dec, addTodo, removeTodo } = toolkitSlice.actions