const { ctx } = require("foundernetes")

// const key = Symbol("iterator-log")
module.exports = () => ({
  // key,
  hook: ({ collection, item, index }, type) => {
    const logger = ctx.require("logger")
    if (type === "collection") {
      logger.debug({ collection }, "collection")
    }
    if (type === "iteration") {
      logger.debug({ item, index }, "iteration")
    }
  },
})
// module.exports.key = key
