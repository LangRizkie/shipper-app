export function pagination(arr, current = 1, limit = 5) {
  let page = current
  const maxLimit = limit
  const offset = (page - 1) * maxLimit

  const paginated = arr.slice(offset).slice(0, limit)
  const total = Math.ceil(arr.length / maxLimit)

  return {
    page: page,
    maxLimit: maxLimit,
    previous: (page > 1) ? page - 1 : 1,
    next: (total > page) ? page + 1 : total,
    total: arr.length,
    pages: total,
    data: paginated
  }
}