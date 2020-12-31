import { createAction } from "redux-actions";

export const ActionTypes = {
  setUserData: "USER/SET_USER_DATA",
};
const setUserData = createAction(ActionTypes.setUserData);

export const Actions = { setUserData };
