const { iteratorFactory } = require("foundernetes")

const iteratorDebugMiddlewareFactory = require("~/middlewares/iterator-debug")

module.exports = iteratorFactory(async () => {
  const debugMiddleware = iteratorDebugMiddlewareFactory()
  const middlewares = [debugMiddleware]
  return {
    middlewares,
  }
})
