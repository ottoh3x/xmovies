import { MyActions } from "../actions/actions";

export const myListReducer = (state =[],action:any) => {
    switch(action.type) {
        case MyActions.ADDTOMYLIST:
            return [...state, action.payload]
    
        case MyActions.REMOVEFROMLIST:
            return [...state.filter((items:any) => items.id != action.payload)]

        default:
            return state
    }
}