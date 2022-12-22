const {
  async,
  ctx,
  playbookFactory,
  // playbookCtx
} = require("foundernetes")

const asyncLoopLogMiddlewareFactory = require("~/middlewares/async-loop-log")

const loadersFactory = require("./loaders")
const playsFactory = require("./plays")

// playbookMiddlewareSymbol = Symbol("playbookMiddlewareSymbol")
// const playbookMiddleware = createPlaybookMiddleware({
//   asyncColl: (coll)=>{

//   }
//   // middleware = playbookMiddlewareSymbol
// })
// const loaderMiddleware =
// const playMiddleware =
// const varsMiddleware =

module.exports = playbookFactory(async () => {
  const loaders = await loadersFactory()
  const plays = await playsFactory()

  const playbook = async () => {
    // const logger = ctx.require("logger")

    const startupsList = await loaders.startups({
      file: "inventories/startups.yaml",
    })

    await async.map(startupsList, async (startup) => {
      const { name, rancherProjectName } = startup
      await plays.rancherProject({
        projectName: rancherProjectName || name,
      })
    })

    // await async.each(startupsList, async (item, index) => {
    //   console.log({ index, item })
    //   await async.eachOf(item, async (val, key) => {
    //     console.log({ index, item, key, val })
    //   })
    // })
  }

  const asyncLoopLogMiddleware = await asyncLoopLogMiddlewareFactory()
  const middlewares = [asyncLoopLogMiddleware]

  return {
    playbook,
    middlewares,
  }
})
