import { rest } from 'msw';
import { mockSuccessFetch } from '../__mocks__/user';

export const userHandlers = [
  rest.get("https://api.github.com/users/:user", mockSuccessFetch)
];