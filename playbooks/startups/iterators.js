const defaultIteratorFactory = require("~/iterators/default")

module.exports = async (common) => {
  // const defaultIterator = await defaultIteratorFactory(
  //   ({ middlewares = [] }) => ({
  //     middlewares: [...common.middlewares, ...middlewares],
  //   })
  // )

  const defaultIterator = await defaultIteratorFactory({
    middlewares: ({ middlewares = [] }) => [
      ...common.middlewares,
      ...middlewares,
    ],
  })

  return {
    default: defaultIterator,
  }
}
