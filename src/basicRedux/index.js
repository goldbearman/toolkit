
const initialState = {
  count: 0
}

export const firstRedicer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return Object.assign({},state,{count:state.count+=1})

    case "DEC":
      return Object.assign({},state,{count:state.count-=1})

    default:
      return state;
  }
};



