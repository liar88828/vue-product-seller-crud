import type { StoreBase } from "~/types/globals/store"
import type { ProductMarketCreate } from "~/types/product/data.db";

export const useProductCreate = () => {
  type Type = ProductMarketCreate
  const { session } = useUserSession()

  const store = reactive<StoreBase<Type>>({
	pending: false,
	error: {
	  brand: [],
	  description: [],
	  image: [],
	  name: [],
	  price: [],
	  stock: [],
	  id_market: [],
	  id_type: [],
	  id_user: [],
	},
	data: {
	  brand: "",
	  description: "",
	  name: "",
	  price: 0,
	  stock: 0,
	  id_type: "",
	  id_market: session.value.session.id_market,
	  image: "https://picsum.photos/200/300",
	  id_user: session.value.session.id,
	},
  })

  const validData = (data: Type) => {
	const valid = zods.product.create.safeParse(data)

	if (!valid.success) {
	  valid.error.errors.map((err) => {

		store.error[err.path[0] as keyof Type] = [err.message]
	  })
	  console.log(valid.error.errors)
	  throw new Error("Form Error Create Product")
	}
	if (valid.success) {
	  Object.keys(store.error).map(
		(key) =>
		  //@ts-expect-error
		  (store.error[key] = [])
	  )
	}
	return valid.data
  }

  const handlerCreate = async (body: Type) => {
	const { data, error, pending } = await useFetch("/api/market/product", {
	  method: "POST",
	  body,
	})

	console.log(data, error, pending)
	if (error.value) {
	  throw new Error(`Server Error Sign In ${ error.value?.statusMessage }`)
	}
	store.pending = pending.value
	return data
  }

  const handleSubmit = async () => {

	try {
	  const valid = validData(store.data)
	  // console.log(valid)
	  await handlerCreate(valid)
	  await navigateTo("/market/product/")

	} catch (e) {
	  if (e instanceof Error) {
		store.msg = e.message
	  }
	} finally {
	  store.pending = false
	}
  }

  return {
	handleSubmit,
	store
  }
}
