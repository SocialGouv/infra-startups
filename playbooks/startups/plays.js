const rancherProjectPlayFactory = require("~/plays/rancher/project")

module.exports = async (common) => {
  const rancherProjectPlay = await rancherProjectPlayFactory({
    middlewares: ({ middlewares = [] }) => [
      ...common.middlewares,
      ...middlewares,
    ],
  })

  return {
    rancherProject: rancherProjectPlay,
  }
}
