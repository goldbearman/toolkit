import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

export const inc = createAction('INC')
export const dec = createAction('DEC')

export default createReducer(initialState, {
  [inc]: function (state) {
    state.count = state.count + 1;
  },
  [dec]: function (state) {
    state.count = state.count -1;
  },
})