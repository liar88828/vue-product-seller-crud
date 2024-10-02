export const useUser = () => {
  const route = useRoute() as GetQuery
  const router = useRouter()

  return {
    getUserById: async (id_user: string) =>
      useFetch(`/api/user/profile/${id_user}`, {}),
    getUserBySession: async () => {
      return useFetch("/api/user/profile")
    },
    editUser: async (data: UserUpdate): Promise<any> =>
      useFetch("/api/user/profile", {
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
      }),
  }
}
