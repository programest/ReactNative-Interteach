const initialState = {
    AUTH: true,
    firstEnjoy: true,
    MESSAGES: []
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ENJOY':
        return { ...state, firstEnjoy: action.payload };
      case 'AUTH':
        return { ...state, AUTH: action.payload };
     case 'ADD_MESSAGE':
	 	const { type = '', text } = action.payload;
	 	const isDuplicateMessage = state.MESSAGES.some(
	 	  (message) =>  message.text === text
	 	);
	 	if (!isDuplicateMessage && text !== '') {
	 	  return {
	 		...state,
	 		MESSAGES: [...state.MESSAGES, { type, text }],
	 	  };
	 	}

	 case 'REMOVE_MESSAGE':
	 	return {
	 		...state,
	 		MESSAGES: state.MESSAGES.slice(1),
	 	  };
      default:
        return state;
    }
  };
  
  export default counterReducer;