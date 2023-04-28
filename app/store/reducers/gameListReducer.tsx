import { GAME_LIST } from "../type";

const initialState = {
  list: [],
};

const gameListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GAME_LIST:
      return {
        ...state,
        list: action?.payload,
      };
    default:
      return state;
  }
};

export default gameListReducer;
