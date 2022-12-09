const { async, ctx, asyncCollCtx } = require("foundernetes")

// const startupsLoaderFactory = require("~/loaders/startups/file")
const startupsLoaderFactory = require("~/loaders/startups/random")
const rancherProjectPlayFactory = require("~/plays/rancher/project")

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
  const logger = ctx.require("logger")

  const rancherProjectPlay = await rancherProjectPlayFactory({
    middlewares: [],
  })
  const startupsLoader = await startupsLoaderFactory({})

  const startupsList = await startupsLoader({
    file: "inventories/startups.yaml",
  })

  const logColl = (coll, index) => {
    logger.info("iteration", { coll, index })
  }
  const asyncCollMiddlewares = [logColl]
  asyncCollCtx.set("asyncCollMiddlewares", asyncCollMiddlewares)

  // console.log("startupsList", startupsList)

  await async.map(startupsList, ({ name, rancherProjectName }) =>
    rancherProjectPlay({
      projectName: rancherProjectName || name,
    })
  )

  // await async.map(startupsList, ({ rancherProjectName }) =>
  //   rancherProjectPlay({
  //     projectName: rancherProjectName,
  //   })
  // )
}
