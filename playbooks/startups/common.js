const forkLoggerFactory = require("foundernetes/plugins/middlewares/fork-logger")

module.exports = async () => {
  const forkLogger = forkLoggerFactory()
  const middlewares = [forkLogger]
  return {
    middlewares,
  }
}
