import { combineReducers } from "redux";
import gameListReducer from "./gameListReducer";

const rootReducer = combineReducers({
  game: gameListReducer,
});

export default rootReducer;
