import { createAction } from "redux-actions";

export const ActionTypes = {
  setGrantsData: "GRANT/SET_GRANTS_DATA",
  setGrantDataByID: "GRANT/SET_GRANT_DATA_BY_ID",
};

const setGrantsData = createAction(ActionTypes.setGrantsData);
const setGrantDataByID = createAction(ActionTypes.setGrantDataByID);

export const Actions = {
  setGrantsData,
  setGrantDataByID,
};
