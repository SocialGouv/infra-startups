const { playbookFactory, ctx } = require("foundernetes")

const loadersFactory = require("./loaders")
const playsFactory = require("./plays")
const iteratorsFactory = require("./iterators")

module.exports = playbookFactory(async () => {
  const loaders = await loadersFactory()
  const plays = await playsFactory()
  const iterators = await iteratorsFactory()

  const playbook = async () => {
    // const logger = ctx.require("logger")

    const startupsList = await loaders.startups({
      file: "inventories/startups.yaml",
    })

    const iterator = ctx.require("iterator")

    await iterator.map(startupsList, async (startup) => {
      const { name, rancherProjectName } = startup
      await plays.rancherProject({
        projectName: rancherProjectName || name,
      })
    })

    // await iterator.each(startupsList, async (item, index) => {
    //   console.log({ index, item })
    //   await iterator.eachOf(item, async (val, key) => {
    //     console.log({ index, item, key, val })
    //   })
    // })
  }

  const middlewares = []

  return {
    playbook,
    middlewares,
    iterators,
  }
})
