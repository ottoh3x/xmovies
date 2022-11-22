import { combineReducers } from "redux";
import { myListReducer } from "./myListReducer";
import { continueWatchingReducer, currentEpisode, currentSeason, tvShowReducer } from "./tvShowReducer";

export const oneReducer = combineReducers({
    MyList : myListReducer,
    CurrentSeason : currentSeason,
    CurrentState : tvShowReducer,
    CurrentEpisode:currentEpisode,
    ContinueWatching:continueWatchingReducer
})