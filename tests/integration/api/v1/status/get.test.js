test("GET to /api/v1/status should return 200", async () => {
  const resp = await fetch("http://localhost:3000/api/v1/status");
  expect(resp.status).toBe(200);

  const responseBody = await resp.json();
  expect(responseBody.updated_at).toBeDefined();

  const parseUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdateAt);
  expect(responseBody.dependencies.database.version).toEqual("16.3");

  expect(responseBody.dependencies.database.max_connections).toBeDefined();
  expect(responseBody.dependencies.database.max_connections).toEqual(
    expect.any(Number),
  );
  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  expect(responseBody.dependencies.database.opened_connections).toEqual(
    expect.any(Number),
  );
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
