import { ZodType, z } from "zod"
import type { SignInProps, SignUpProps } from "~/types/auth/user"
import type { MarketServer } from "~/types/market/ProfileCompany"
import type { ProductUser } from "~/types/product/data.db"
import type {
  IdProduct,
  IdValid,
  MarketIdProductId,
} from "~/types/product/findId"
import type { BoxCreate, IdBox } from "~/types/transaction/trolly"
import type { UserCreate } from "~/types/user/ControlCreateUser"
const noSymbolString = z
  .string()
  .min(1)
  .max(250) // Set the maximum length to 250, will be adjusted for each field
  .regex(/^[a-zA-Z0-9 ]*$/, "String cannot include symbols")

export default {
  idNumber: z.number().min(1),
  idString: z.string().uuid(),

  idValid: z.object({
    id: z.number().min(1),
    id_user: z.string().uuid(),
  }) satisfies ZodType<IdValid>,

  idMarketProduct: z.object({
    id_market: z.number().min(1),
    id_product: z.number().min(1),
  }) satisfies ZodType<MarketIdProductId>,

  idProduct: z.object({
    id_user: z.string().uuid(),
    id_market: z.number().min(1),
  }) satisfies ZodType<IdProduct>,

  idBox: z.object({
    id_trolly: z.number().min(1),
    id_product: z.number().min(1),
    id_box: z.number().min(1),
  }) satisfies ZodType<IdBox>,

  companyCreate: z.object({
    name: z.string(),
    industry: z.string(),
    address: z.string(),
    description: z.string(),
    mission: z.string(),
    vision: z.string(),
    history: z.string(),
    since: z.date(),
    id_user: z.string(),
  }) satisfies ZodType<MarketServer>,

  productCreate: z.object({
    // id: z.number(),
    name: noSymbolString.min(3).max(50),
    description: noSymbolString.min(3).max(250),
    brand: noSymbolString.min(3).max(250),
    id_type: noSymbolString.min(3).max(20),
    price: z.number(),
    image: z.string(),
    stock: z.number(),
    id_user: z.string().uuid(),
    id_market: z.number().nullable(),

    // id_order: z.number(),
    // id_company: z.number(),
  }) satisfies ZodType<ProductUser>,

  productUpdate: z.object({
    id: z.number(),
    name: noSymbolString.min(3).max(50),
    description: noSymbolString.min(3).max(250),
    brand: noSymbolString.min(3).max(250),
    id_type: noSymbolString.min(3).max(20),
    price: z.number(),
    image: z.string(),
    stock: z.number(),
    id_user: z.string().uuid(),
    id_market: z.number().nullable(),
  }) satisfies ZodType<ProductUser>,

  signUp: z
    .object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(8),
      confPass: z.string().min(8),
    })
    .refine((data) => data.password === data.confPass, {
      message: "Passwords don't match",
      path: ["confirm"],
    }) satisfies ZodType<SignUpProps>,

  signIn: z.object({
    email: z.string().email().min(10),
    password: z.string().min(8),
  }) satisfies ZodType<SignInProps>,

  user: z.object({
    id_market: z.number(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    email: z.string(),
    password: z.string(),
    address: z.string().nullable(),
    id_role: z.string().nullable(),
    // id_trolly: z.number().nullable(),
    // id_follow: z.number().nullable(),
    // id_like: z.number().nullable(),
  }) satisfies ZodType<UserCreate>,

  boxCreate: z.object({
    price: z.number(),
    id_trolly: z.number(),
    qty: z.number(),
    id_product: z.number(),
    id_transaction: z.number(),
  }) satisfies ZodType<BoxCreate>,

  // userUpdate: z.object({
  //   email: z.string(),
  //   name: z.string().nullable(),
  //   phone: z.string().nullable(),
  //   address: z.string().nullable(),
  //   password: z.string(),
  //   id_trolly: z.string().nullable(),
  //   id_role: z.string().nullable(),
  //   id_follow: z.number().nullable(),
  //   id: z.string(),
  // }) satisfies ZodType<UserUpdate>,
}
