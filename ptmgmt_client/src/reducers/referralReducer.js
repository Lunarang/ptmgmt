const referralReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_REFERRAL': {
            return [...state, action.payload];
        }
        case 'EDIT_REFERRAL': {
            return { 
                ...state.map((referral) => {
                    if(referral.id === action.payload.id) {
                        return {
                        ...referral,
                        ...action.payload
                        }
                    } else {
                        return referral;
                    }
                })
            }
        }
        case 'DELETE_REFERRAL': {
            return {
                ...state.filter((referral) => {
                return referral.id !== action.payload
                })
            }
        }
        case 'FETCH_REFERRALS_FULFILLED': {
            return [...state, ...action.payload];
        }
        default:
            return state
    }
};
  
export default referralReducer

// Select all referrals
export const selectAllReferrals = state => state.referrals

// GET
export const fetchReferrals =  () => async (dispatch) => {
const response = await fetch('http://127.0.0.1:3001/referrals')
const referrals = await response.json()
dispatch({ type: 'FETCH_REFERRALS_FULFILLED', payload: referrals })
}

// POST
export const addReferral = data => async (dispatch) => {
const response = await fetch('http://127.0.0.1:3001/referrals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    referral: data
    })
})
const newReferral = await response.json()
dispatch({ type: 'ADD_REFERRAL', payload: newReferral })
}

// PATCH
export const editReferral = (data, id) => async (dispatch) => {
const response = await fetch(`http://127.0.0.1:3001/referrals/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    referral: data
    })
})
const updatedReferral = await response.json()
dispatch({ type: 'EDIT_REFERRAL', payload: updatedReferral })
}

// DELETE
export const deleteReferral = (id) => async (dispatch) => {
const response = await fetch(`http://127.0.0.1:3001/referrals/${id}`, {method: 'DELETE'})
const confirmation = await response.json()
console.log(confirmation)
dispatch({ type: 'DELETE_REFERRAL', payload: id })
}