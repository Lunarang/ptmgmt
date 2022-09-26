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