const { ctx } = require("foundernetes")

module.exports = () => ({
  hook: () => {
    const loader = ctx.get("loader")
    const play = ctx.get("play")
    const playbook = ctx.get("playbook")
    ctx.replace("logger", (log) =>
      log.child({
        loader: loader?.name,
        playbook: playbook?.name,
        play: play?.name,
      })
    )
  },
})
