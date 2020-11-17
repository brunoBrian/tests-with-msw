import { fetchUser } from "../user";
import { server, rest } from "../../testServer";

it("converts correctly", async () => {
  const { data } = await fetchUser('brunoBrian');

  expect(data.avatar_url).toEqual('https://avatars2.githubusercontent.com/u/20588822?v=4');
  expect(data.login).toEqual('brunoBrian');
  expect(data.name).toEqual('Bruno Brian');
});

it("handles failure", async () => {
  server.use(
    rest.get("https://api.github.com/users/brunoBrian", (_req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  await expect(fetchUser('brunoBrian')).rejects.toThrow("404");
});
