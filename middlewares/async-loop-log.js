const { ctx } = require("foundernetes")

module.exports = () => ({
  registerContext: () => {
    const logger = ctx.require("logger")
    // logger.child({},{indent: }).info({ coll, index }, "iteration")
    const middlewares = ctx.require("middlewares")
    middlewares.push({
      collection: (collection) => {
        logger.info({ collection }, "collection")
      },
      iteration: (item, index) => {
        logger.info({ item, index }, "iteration")
      },
    })
  },
})
