export const getGrants = (state) => state.grants.listOfGrants;

export const getGrantInformation = (id) => (state) => {
  return state.grants.grants[id];
};
