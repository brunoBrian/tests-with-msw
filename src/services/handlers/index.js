import { rest } from "msw";

import { currencyHandlers } from './currency'
import { reposHandlers } from './repos'
import { userHandlers } from './user'

const defaultHandler = [
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "You must add request handler." })
    );
  })
]

export default [
  ...currencyHandlers,
  ...reposHandlers,
  ...userHandlers,
  ...defaultHandler
];