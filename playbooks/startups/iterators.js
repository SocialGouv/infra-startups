const defaultIteratorFactory = require("~/iterators/default")

module.exports = async () => {
  const defaultIterator = await defaultIteratorFactory({
    // middlewares: [],
  })
  return {
    default: defaultIterator,
  }
}
