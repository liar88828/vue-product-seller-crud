import type { ErrZod, SignInProps } from "~/types/auth/user"

export const useSignIn = () => {
  const store = reactive<SignInProps>({
	email: "",
	password: "",
  })

  const errStore = reactive<ErrZod<SignInProps>>({
	success: false,
	pending: false,
	msg: '',
	data: {
	  email: "",
	  password: "",
	},
  })
  const handleSubmit = async () => {
	// console.log(store)

	const valid = getTry<SignInProps>(() => zods.signIn.parse(store))
	// console.log(valid)

	// send to database
	// if found will redirect
	// confirm to send otp because session is valid
	//
	// else not found will redirect to sign up
	// and make new Account then send otp
	if (valid.success) {
	  errStore.pending = true
	  const { data, error, pending } = await useFetch("/api/auth/sign-in", {
		method: "POST",
		body: valid.data,
	  })

	  console.log(error.value, 'data')
	  if (!data.value) {
		console.error(error.value?.statusMessage, 'error bos in if')

		if (error.value?.statusCode === 404) {
		  errStore.msg = error.value?.statusMessage ?? ""
		}

		if (error.value?.statusCode === 401) {
		  errStore.msg = error.value?.statusMessage ?? ""
		}


	  } else if (error.value) {
		console.error(error.value, 'error from api')

		throw createError(
		  {
			statusCode: 404,
			statusMessage: "Error Sign In"
		  }
		)
	  } else {
		// console.log(data.value)
		await navigateTo("/home")
	  }
	  errStore.pending = pending.value

	} else {
	  console.error(" is error from use sign in")
	  console.error(" is error ")
	  errStore.success = false
	  errStore.data = {
		email: valid.data.email,
		password: valid.data.password,
	  }

	}

  }
  return {
	store,
	errStore,
	handleSubmit,

  }
}
