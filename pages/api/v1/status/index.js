import database from "infra/database.js";

async function status(req, resp) {
  const result = await database.query(" SELECT 1 + 1 ;");
  console.log(result);
  return resp.status(200).json({
    message: result,
  });
}
export default status;
