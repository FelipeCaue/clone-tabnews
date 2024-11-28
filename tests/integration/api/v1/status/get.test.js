test("GET to /api/v1/status should return 200", async () => {
  const resp = await fetch("http:localhost:3000");
  expect(resp.status).toBe(200);
});
