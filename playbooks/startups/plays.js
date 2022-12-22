const rancherProjectPlayFactory = require("~/plays/rancher/project")

module.exports = async () => {
  const rancherProjectPlay = await rancherProjectPlayFactory({
    // middlewares: [],
  })

  return {
    rancherProject: rancherProjectPlay,
  }
}
