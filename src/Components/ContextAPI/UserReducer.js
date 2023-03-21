export const initialState = {
    userData:{},
  };
  
  export const actionTypes = {
    SET_USER:"SET_USER",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
     
      case actionTypes.SET_USER:
        return {...state,userData:action.value};
      default:
        return state;
    }
  };
  
  export default reducer;