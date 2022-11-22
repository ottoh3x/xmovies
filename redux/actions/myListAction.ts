import { MyActions } from "./actions"

export const addToMyList = (payload:any) => {
    return {type:MyActions.ADDTOMYLIST , payload : payload}
}

export const removeFromList = (payload:any) => {
    return {type:MyActions.REMOVEFROMLIST,payload:payload}
}