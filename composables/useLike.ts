export const useLike = () => {
  const refreshLike = () => refreshNuxtData("like_product_id")

  return {
    add: async (id_product: number) => {
      return useFetch("/api/user/like/:id", {
        method: "POST",
        params: {
          id: id_product,
        },
      }).then((data) => {
        refreshLike()
        return data
      })
    },
    findId: async (id_product: number) => {
      return useFetch("/api/user/like/:id", {
        key: "like_product_id",
        method: "GET",
        params: {
          id: id_product,
        },
      })
    },

    findAll: async () => {
      return await useFetch("/api/user/like")
    },
  }
}
