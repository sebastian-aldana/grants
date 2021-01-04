export const getGrants = (page) => (state) => state.grants.listOfGrants[page];

export const getGrantInformation = (id) => (state) => {
  return state.grants.grants[id];
};

export const getParams = (state) => state.grants.params;

export const getHitCount = (state) => state.grants.hitCount;
