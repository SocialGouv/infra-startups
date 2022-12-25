const { ctx } = require("foundernetes")

module.exports = () => ({
  hook: (mixed, pluginType) => {
    const loader = ctx.get("loader")
    const play = ctx.get("play")
    const playbook = ctx.get("playbook")

    ctx.replace("indentation", (indent = -1) => ++indent)
    const indentation = ctx.get("indentation")

    let index
    if (pluginType === "iteration") {
      index = mixed.index
    }

    ctx.replace("logger", (log) =>
      log.child(
        {
          loader: loader?.name,
          playbook: playbook?.name,
          play: play?.name,
          index,
        },
        { indentation: indentation * 2 }
      )
    )
  },
})
