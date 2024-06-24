let count = 0
export default defineEventHandler(async (event) => {
  return { count: count++ }
})
