import getAxios from "_utils_/network/request";

const API = process.env.GRANTS_API;

async function getGrants(res, body) {
  try {
    const { data } = await getAxios().post(
      `${API}/opportunities/search/`,
      body
    );
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export default async (req, res) => {
  const { method, body } = req;
  try {
    switch (method) {
      case "POST": {
        await getGrants(res, body);
      }

      default:
        break;
    }
  } catch (error) {}
};
