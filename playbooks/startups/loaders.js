const startupsLoaderFactory = require("~/loaders/startups/file")
// const startupsLoaderFactory = require("~/loaders/startups/random")

module.exports = async () => {
  const startupsLoader = await startupsLoaderFactory({
    // middlewares: [],
  })

  return {
    startups: startupsLoader,
  }
}
