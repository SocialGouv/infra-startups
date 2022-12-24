const { iteratorFactory } = require("foundernetes")

const iteratorLogMiddlewareFactory = require("~/middlewares/iterator-log")

module.exports = iteratorFactory(async () => {
  const logMiddleware = iteratorLogMiddlewareFactory()
  const middlewares = [logMiddleware]
  return {
    middlewares,
  }
})
