import { BUY_ICECREAM } from "./icecreamTypes";

const initial_icecream_state = {
    total_icecreams: 15
}

const icecreamReducer = (state = initial_icecream_state, action) => {
    switch (action.type){
        case BUY_ICECREAM: 
            return {
                ...state, 
                total_icecreams: state.total_icecreams - 1
            }

        default : return state
    }
}

export default icecreamReducer