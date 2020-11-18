export const successFetchData = { 
  data: { 
    "login": "brunoBrian",
    "id": 20588822,
    "name": "Bruno Brian",
    "avatar_url": "https://avatars2.githubusercontent.com/u/20588822?v=4",
  }
};

export const mockSuccessFetch = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(successFetchData),
  )
}