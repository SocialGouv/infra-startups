const { playFactory, ctx } = require("foundernetes")

module.exports = playFactory(async () => ({
  retry: 3,
  // retry: {

  // },
  async preCheck() {
    return false
  },
  async postCheck() {
    return true
  },
  async run(vars, _context) {
    // const { retryNumber } = context
    // console.log("vars", vars)
    const { projectName } = vars
    const logger = ctx.require("logger")
    logger.info(`creating rancher project: ${projectName}`)
    return true
  },
}))
