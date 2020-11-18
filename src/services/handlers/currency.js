import { rest } from 'msw';

export const currencyHandlers = [
  rest.get("https://api.exchangeratesapi.io/latest", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ rates: { CAD: 1.42 } }));
  }),
]