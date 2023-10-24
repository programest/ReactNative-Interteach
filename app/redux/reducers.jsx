const initialState = {
    AUTH: true,
    firstEnjoy: true,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ENJOY':
        return { ...state, firstEnjoy: action.payload };
      case 'AUTH':
        return { ...state, AUTH: action.payload };
      default:
        return state;
    }
  };
  
  export default counterReducer;