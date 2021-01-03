import { createAction } from "redux-actions";

export const ActionTypes = {
  setGrantsData: "GRANT/SET_GRANTS_DATA",
  setGrantDataByID: "GRANT/SET_GRANT_DATA_BY_ID",
  setParams: "GRANT/SET_PARAMS",
};

const setGrantsData = createAction(ActionTypes.setGrantsData);
const setGrantDataByID = createAction(ActionTypes.setGrantDataByID);
const setParams = createAction(ActionTypes.setParams);

export const Actions = {
  setGrantsData,
  setGrantDataByID,
  setParams,
};
