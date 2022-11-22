import { MyActions } from "./actions"

export const SetCurrentSeason = (payload:any) => {
    return {type:MyActions.SETCURRENTSEASON , payload : payload}
}
export const SetCurrentEpisode = (payload:any) => {
    return {type:MyActions.SETCURRENTEPISODE , payload : payload}
}

export const SetCurrentState = (payload:any) => {
    return {type:MyActions.GETCURRENTSTATES , payload : payload}
}

export const SetContinueWatching = (payload:any) => {
    return {type:MyActions.SETCONTINUEWATCHING , payload : payload}
}

export const GetContinueWatching = (payload:any) => {
    return { type: MyActions.GETCONTINUEWATCHING, payload: payload };
  };