import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Handlers from './services/handlers';

const server = setupServer(...Handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
