import { rest } from 'msw';
import { mockRepoSuccess } from '../__mocks__/repos';

export const reposHandlers = [
  rest.get("https://api.github.com/users/octocat/repos", mockRepoSuccess),
]