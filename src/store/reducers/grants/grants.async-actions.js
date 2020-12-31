import axios from "axios";
import { Actions as GrantsAction } from "_reducers_/grants/grants.actions";
const apiPrefix = "/api/grants";

export const asyncGetGrants = () => async (dispatch) => {
  try {
    const { data } = await axios.post(apiPrefix);
    dispatch(GrantsAction.setGrantsData(data.oppHits));
  } catch (error) {
    console.log(error);
  }
};

export const asyncGetGrantInformation = (id) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${apiPrefix}/detail`, { id });
    dispatch(GrantsAction.setGrantDataByID(data));
  } catch (error) {
    console.log(error);
  }
};
