const { loaderFactory } = require("foundernetes")
const randomName = require("node-random-name")

module.exports = loaderFactory(async () => {
  const load = async (vars) => {
    const { number = 500 } = vars
    const data = [...new Array(number)].map((_, index) => ({
      name: randomName({ seed: index }).toLowerCase().replaceAll(" ", "-"),
    }))
    return data
  }

  const randomId = Math.random()

  return {
    load,
    validateVars: {
      anyOf: [
        {
          type: "object",
          properties: {
            number: {
              type: "integer",
            },
          },
        },
        {
          type: "null",
        },
      ],
    },
    validateData: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
        },
        required: ["name"],
        additionalProperties: true,
      },
    },
    memoizeVars: () => randomId,
  }
})
