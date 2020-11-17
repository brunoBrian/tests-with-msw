import { fetchUser } from "../user";
import { server, rest } from "../../testServer";
import { successFetchData } from "../__mocks__/user";

describe('Test Github User Fetch', () => {
  const userName = 'teste';

  it("converts correctly", async () => {
    const { data } = await fetchUser(userName);

    expect(data.avatar_url).toEqual(successFetchData.data.avatar_url);
    expect(data.login).toEqual(successFetchData.data.login);
    expect(data.name).toEqual(successFetchData.data.name);
  });

  it("handles failure", async () => {
    const message = 'Usuário não encontrado';

    server.use(
      rest.get(`https://api.github.com/users/${userName}`, (_req, res, ctx) => {
        return res(ctx.status(404, 'Não encontrado'), ctx.json({ message }));
      })
    );

    fetchUser(userName).then(() => {}).catch(err => {
      expect(err.response.data.message).toBe(message);
    })

    await expect(fetchUser(userName)).rejects.toThrow("404");
  });
}) 