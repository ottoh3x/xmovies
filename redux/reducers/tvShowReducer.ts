import { MyActions } from "../actions/actions";

export const currentSeason = (state = 1,action:any) => {
    switch(action.type) {
        case MyActions.SETCURRENTSEASON:
            return action.payload
      
    

        default:
            return state
    }
}


export const currentEpisode = (state = 1,action:any) => {
    switch(action.type) {
        case MyActions.SETCURRENTEPISODE:
            return action.payload
      
    

        default:
            return state
    }
}
export const continueWatchingReducer = (state = [],action:any) => {
    switch(action.type) {
        case MyActions.SETCONTINUEWATCHING:
            return [...state.filter((item:any) => item.id !== action.payload.id), action.payload].reverse();
        case MyActions.GETCONTINUEWATCHING:
            return action.payload
      
    

        default:
            return state
    }
}

export const tvShowReducer = (state = [],action:any) => {
    switch(action.type) {
        case MyActions.GETCURRENTSTATES:
            return [...state.filter((item:any) => item.id !== action.payload.id),action.payload]
       

        default:
            return state
    }
}