const initialState = {
  data: [],
  status: 'idle',
  error: null
};

const attorneyReducer = (state = initialState, action) => {
    switch(action.type){
      case 'ADD_ATTORNEY': {
        return {}
      }
      case 'FETCH_ATTORNEYS_PENDING': {
        return {
          ...state,
          status: 'pending'
        }
      }
      case 'FETCH_ATTORNEYS_FULFILLED': {
        return {
          ...state,
          status: 'succeeded',
          data: action.payload
        }
      }
      case 'FETCH_ATTORNEYS_REJECTED': {
        return {
          ...state,
          status: 'failed',
          error: action.payload.error.message
        }
      }
      default:
        return state
    }
  };
  
  export default attorneyReducer
  
  export const selectAllAttorneys = state => state.attorneys.data
  
  export const selectAttorneyById = (state, id) => 
  state.attorneys.data.find(attorney => attorney.id === id)

  export const fetchAttorneys =  () => async (dispatch) => {
    dispatch({ type: 'FETCH_ATTORNEYS_PENDING' })
    const response = await fetch('http://127.0.0.1:3001/attorneys')
    const attorneys = await response.json()
    dispatch({ type: 'FETCH_ATTORNEYS_FULFILLED', payload: attorneys })
  }
