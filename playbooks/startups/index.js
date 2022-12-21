const { async, ctx, asyncCollCtx, playbookCtx } = require("foundernetes")

const asyncCollLogMiddlewareFactory = require("~/middlewares/async-coll-log")

const composition = require("./composition")

module.exports = async () => {
  const { loaders, plays, middlewares } = await composition()

  const playbook = async () => {
    const logger = ctx.require("logger")

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

  return {
    playbook,
    middlewares,
  }
}
