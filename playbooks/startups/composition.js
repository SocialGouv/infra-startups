// const { asyncCollCtx } = require("foundernetes")

const startupsLoaderFactory = require("~/loaders/startups/file")
// const startupsLoaderFactory = require("~/loaders/startups/random")
const rancherProjectPlayFactory = require("~/plays/rancher/project")

const asyncCollLogMiddlewareFactory = require("~/middlewares/async-coll-log")

// playbookMiddlewareSymbol = Symbol("playbookMiddlewareSymbol")
// const playbookMiddleware = createPlaybookMiddleware({
//   asyncColl: (coll)=>{

//   }
//   // middleware = playbookMiddlewareSymbol
// })
// const loaderMiddleware =
// const playMiddleware =
// const varsMiddleware =

module.exports = async () => {
  // const asyncCollLogMiddleware = await asyncCollLogMiddlewareFactory()
  // const asyncCollMiddlewares = [asyncCollLogMiddleware]

  const rancherProjectPlay = await rancherProjectPlayFactory({
    // middlewares: [...asyncCollMiddlewares],
  })

  const startupsLoader = await startupsLoaderFactory({
    // middlewares: [...asyncCollMiddlewares],
  })

  const loaders = {
    startups: startupsLoader,
  }

  const plays = {
    rancherProject: rancherProjectPlay,
  }

  const asyncCollLogMiddleware = await asyncCollLogMiddlewareFactory()
  const middlewares = [asyncCollLogMiddleware]

  return {
    loaders,
    plays,
    middlewares,
  }
}
