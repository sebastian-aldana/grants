import { handleAction } from "redux-actions";
import { Actions } from "./grants.actions";

const initialState = {
  listOfGrants: [],
  grants: {},
};

const setGrantsDAta = handleAction(
  Actions.setGrantsData,
  (state, { payload }) => {
    return { ...state, listOfGrants: [...state.listOfGrants, ...payload] };
  },
  initialState
);

const setGrantDataByID = handleAction(
  Actions.setGrantDataByID,
  (state, { payload }) => {
    if (!state.grants[payload.id]) {
      return { ...state, grants: { ...state.grants, [payload.id]: payload } };
    }
  },
  initialState
);

const grantsReducer = (state = initialState, action) => {
  let currenState = setGrantsDAta(state, action);
  currenState = setGrantDataByID(currenState, action);
  return currenState;
};

export default grantsReducer;
