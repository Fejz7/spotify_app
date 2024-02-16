const initialState = {
    rockSection: [],
    popSection: [],
    hipHopSection: [],
  };
  
  const musicReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FILL_MUSIC_SECTION':
        return {
          ...state,
          [action.payload.sectionId]: action.payload.data.slice(0, 4),
        };
      default:
        return state;
    }
  };
  
  export default musicReducer;
  