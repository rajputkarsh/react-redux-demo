import { BUY_CAKE } from "./cakeTypes"

const inital_state = {
    total_cakes : 10
}

const cakeReducer = (state = inital_state, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state, 
                total_cakes : state.total_cakes - action.payload
            }

        default: return state
    }
}

export default cakeReducer