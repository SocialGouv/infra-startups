const { playbookCtx, asyncLoopCtx } = require("foundernetes")

module.exports = () => ({
  registerContext: () => {
    const playbookLogger = playbookCtx.get("logger")
    // playbookLogger.child({},{indent: }).info({ coll, index }, "iteration")
    const middlewares = asyncLoopCtx.get("middlewares") || []
    asyncLoopCtx.set("middlewares", middlewares)
    middlewares.push({
      collection: (collection) => {
        playbookLogger.info({ collection }, "collection")
      },
      iteration: (item, index) => {
        playbookLogger.info({ item, index }, "iteration")
      },
    })
  },
})
