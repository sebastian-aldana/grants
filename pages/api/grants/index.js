import getAxios from "_utils_/network/request";

const API = process.env.GRANTS_API;

async function getGrants(res, options) {
  try {
    const { data } = await getAxios().post(`${API}/opportunities/search/`, {
      startRecordNum: 0,
      sortBy: "openDate|desc",
      oppStatuses: "forecasted|posted",
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export default async (req, res) => {
  const { method } = req;
  try {
    switch (method) {
      case "POST": {
        await getGrants(res);
      }

      default:
        break;
    }
  } catch (error) {}
};
