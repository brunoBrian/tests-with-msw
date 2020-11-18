export const successFetchRepoData = { 
  data: [
    {
      "id": 132935648,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
      "name": "boysenberry-repo-1",
      "full_name": "octocat/boysenberry-repo-1",
      "private": false,
    },
    {
      "id": 132935648,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
      "name": "boysenberry-repo-1",
      "full_name": "octocat/boysenberry-repo-1",
      "private": false,
    }
  ]
};

export const mockRepoSuccess = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(successFetchRepoData),
  )
}