function status(req, resp) {
  return resp.status(200).json({
    message: "Felipe ",
  });
}
function f() {
  console.log("dddd");
}
export default status;
