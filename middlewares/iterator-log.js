const { ctx } = require("foundernetes")

// const key = Symbol("async-loop-log")
module.exports = () => {
  const logger = ctx.require("logger")
  return {
    // key,
    collection: (collection) => {
      logger.info({ collection }, "collection")
    },
    iteration: (item, index) => {
      logger.info({ item, index }, "iteration")
    },
  }
}
// module.exports.key = key
