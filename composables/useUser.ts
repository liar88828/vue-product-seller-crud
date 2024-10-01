export const useUser = () => {
  const route = useRoute() as GetQuery
  const router = useRouter()

  return {
    getUserId: async () => {
      return useFetch("/api/user/profile")
    },

    editUser: async (data: UserUpdate): Promise<any> => {
      // console.log(data)

      return useFetch("/api/user/profile", {
        method: "PUT",
        body: data,
      }).then(async ({ data, error }) => {
        if (!data.value || error.value) {
          console.log("is error")
          console.error(error.value)
          return false
        }
        router.push(
          route.query.redirectPath ? route.query.redirectPath : "/user/profile"
        )
        // console.log("will redirect")
        return true
      })
    },
  }
}
