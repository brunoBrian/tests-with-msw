import { fetchRepo } from "../repos";
import { server, rest } from "../../testServer";

it("converts correctly", async () => {
  const { data: repos } = await fetchRepo();

  repos.map(repo => {
    expect(repo.id).toBeDefined();
    expect(repo.node_id).toBeDefined();
    expect(repo.name).toBeDefined();
    expect(repo.full_name).toBeDefined();
  })
});

it("handles failure", async () => {
  server.use(
    rest.get("https://api.github.com/users/octocat/repos", (_req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  await expect(fetchRepo()).rejects.toThrow("404");
});
