import { handleAction } from "redux-actions";
import { Actions } from "./grants.actions";

const initialState = {
  listOfGrants: [],
  grants: {},
  params: {
    cfda: "",
    keyword: "",
    oppNum: "",
    oppStatuses: "forecasted|posted",
    sortBy: "openDate|desc",
    startRecordNum: 0,
  },
};

const setGrantsDAta = handleAction(
  Actions.setGrantsData,
  (state, { payload }) => {
    return { ...state, listOfGrants: [...payload] };
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

const setGrantParams = handleAction(
  Actions.setParams,
  (state, { payload }) => {
    if (!payload.dateRange) {
      delete state.params.dateRange;
    }
    return { ...state, params: { ...state.params, ...payload } };
  },
  initialState
);

const grantsReducer = (state = initialState, action) => {
  let currenState = setGrantsDAta(state, action);
  currenState = setGrantDataByID(currenState, action);
  currenState = setGrantParams(currenState, action);
  return currenState;
};

export default grantsReducer;
