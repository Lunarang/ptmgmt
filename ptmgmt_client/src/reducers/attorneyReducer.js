const attorneyReducer = (state = [], action) => {
    switch(action.type){
      case 'ADD_ATTORNEY':
        return
      case 'FETCH_ATTORNEYS_FULFILLED':
        return action.payload
      default:
        return state
    }
  };
  
  export default attorneyReducer
  
  export const selectAllAttorneys = state => state.attorneys
  
  export const fetchAttorneys =  () => async (dispatch) => {
    const response = await fetch('http://127.0.0.1:3001/attorneys')
    const attorneys = await response.json()
    dispatch({ type: 'FETCH_ATTORNEYS_FULFILLED', payload: attorneys })
  }
