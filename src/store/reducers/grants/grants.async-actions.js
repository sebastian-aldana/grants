import axios from "axios";
import { Actions as GrantsAction } from "_reducers_/grants/grants.actions";
const apiPrefix = "/api/grants";
import store from "_store_";

export const asyncGetGrants = () => async (dispatch) => {
  try {
    const {
      grants: { params },
    } = store.getState();
    const { data } = await axios.post(apiPrefix, params);
    dispatch(GrantsAction.setGrantsData(data.oppHits));
  } catch (error) {
    console.log(error);
  }
};

export const asyncGetGrantInformation = (id) => async (dispatch) => {
  try {
    if (id) {
      const { data } = await axios.post(`${apiPrefix}/detail`, { id });
      let isSynopsis = Boolean(data.synopsis);
      dispatch(GrantsAction.setGrantDataByID({ ...data, isSynopsis }));
    }
  } catch (error) {
    console.log(error);
  }
};

export const setParams = (params) => async (dispatch) => {
  try {
    dispatch(GrantsAction.setParams(params));
  } catch (error) {
    console.log(error);
  }
};
