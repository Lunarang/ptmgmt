const imagingReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_IMAGING': {
            return [...state, action.payload];
        }
        case 'EDIT_IMAGING': {
            return { 
                ...state.map((imaging) => {
                    if(imaging.id === action.payload.id) {
                        return {
                        ...imaging,
                        ...action.payload
                        }
                    } else {
                        return imaging;
                    }
                })
            }
        }
        case 'DELETE_IMAGING': {
            return {
                ...state.filter((imaging) => {
                return imaging.id !== action.payload
                })
            }
        }
        case 'FETCH_IMAGINGS_FULFILLED': {
            return [...state, ...action.payload];
        }
        default:
            return state
    }
};
  
export default imagingReducer


// Select all imagings
export const selectAllImagings = state => state.imagings

// GET
export const fetchImagings =  () => async (dispatch) => {
const response = await fetch('http://127.0.0.1:3001/imagings')
const imagings = await response.json()
dispatch({ type: 'FETCH_IMAGINGS_FULFILLED', payload: imagings })
}

// POST
export const addImaging = data => async (dispatch) => {
const response = await fetch('http://127.0.0.1:3001/imagings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    imaging: data
    })
})
const newImaging = await response.json()
dispatch({ type: 'ADD_IMAGING', payload: newImaging })
}

// PATCH
export const editImaging = (data, id) => async (dispatch) => {
const response = await fetch(`http://127.0.0.1:3001/imagings/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    imaging: data
    })
})
const updatedImaging = await response.json()
dispatch({ type: 'EDIT_IMAGING', payload: updatedImaging })
}

// DELETE
export const deleteImaging = (id) => async (dispatch) => {
const response = await fetch(`http://127.0.0.1:3001/imagings/${id}`, {method: 'DELETE'})
const confirmation = await response.json()
console.log(confirmation)
dispatch({ type: 'DELETE_IMAGING', payload: id })
}