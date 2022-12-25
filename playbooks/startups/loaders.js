const startupsLoaderFactory = require("~/loaders/startups/file")
// const startupsLoaderFactory = require("~/loaders/startups/random")

module.exports = async (common) => {
  const startupsLoader = await startupsLoaderFactory({
    middlewares: ({ middlewares = [] }) => [
      ...common.middlewares,
      ...middlewares,
    ],
  })

  return {
    startups: startupsLoader,
  }
}
