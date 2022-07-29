const treatmentReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TREATMENT': {
            return [...state, action.payload];
        }
        case 'EDIT_TREATMENT': {
            return { 
                ...state.map((treatment) => {
                    if(treatment.id === action.payload.id) {
                        return {
                        ...treatment,
                        ...action.payload
                        }
                    } else {
                        return treatment;
                    }
                })
            }
        }
        case 'DELETE_TREATMENT': {
            return {
                ...state.filter((treatment) => {
                return treatment.id !== action.payload
                })
            }
        }
        case 'FETCH_TREATMENTS_FULFILLED': {
            return [...state, ...action.payload];
        }
        default:
            return state
    }
};
  
export default treatmentReducer


// Select all treatments
export const selectAllTreatments = state => state.treatments

// GET
export const fetchTreatments =  () => async (dispatch) => {
const response = await fetch('http://127.0.0.1:3001/treatments')
const treatments = await response.json()
dispatch({ type: 'FETCH_TREATMENTS_FULFILLED', payload: treatments })
}

// POST
export const addTreatment = data => async (dispatch) => {
const response = await fetch('http://127.0.0.1:3001/treatments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    treatment: data
    })
})
const newTreatment = await response.json()
dispatch({ type: 'ADD_TREATMENT', payload: newTreatment })
}

// PATCH
export const editTreatment = (data, id) => async (dispatch) => {
const response = await fetch(`http://127.0.0.1:3001/treatments/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    treatment: data
    })
})
const updatedTreatment = await response.json()
dispatch({ type: 'EDIT_TREATMENT', payload: updatedTreatment })
}

// DELETE
export const deleteTreatment = (id) => async (dispatch) => {
const response = await fetch(`http://127.0.0.1:3001/treatments/${id}`, {method: 'DELETE'})
const confirmation = await response.json()
console.log(confirmation)
dispatch({ type: 'DELETE_TREATMENT', payload: id })
}