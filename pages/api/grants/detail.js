import axios from "axios";
import qs from "qs";

const API = process.env.GRANTS_API;

async function getGrantDetail(res, id) {
  try {
    var params = qs.stringify({
      oppId: `${id}`,
    });
    const url = "https://www.grants.gov/grantsws/rest/opportunity/details";

    const { data } = await axios.post(url, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export default async (req, res) => {
  const { method, body } = req;
  const { id } = body;
  try {
    switch (method) {
      case "POST": {
        await getGrantDetail(res, id);
      }

      default:
        break;
    }
  } catch (error) {}
};
