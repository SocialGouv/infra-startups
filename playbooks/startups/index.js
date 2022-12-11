const { async, ctx, asyncCollCtx, playbookCtx } = require("foundernetes")

const asyncCollLogMiddlewareFactory = require("~/middlewares/async-coll-log")

const composition = require("./composition")

module.exports = async () => {
  const asyncCollLogMiddleware = await asyncCollLogMiddlewareFactory()
  const middlewares = [asyncCollLogMiddleware]
  return {
    playbook: async () => {
      const logger = ctx.require("logger")

      const { loaders, plays } = await composition()

      const startupsList = await loaders.startups({
        file: "inventories/startups.yaml",
      })

      await async.map(startupsList, ({ name, rancherProjectName }) =>
        plays.rancherProject({
          projectName: rancherProjectName || name,
        })
      )
    },
    middlewares,
  }
}
