import type { Company, User } from "@prisma/client"
import { ZodType, z } from "zod"
import type { SignInProps, SignUpProps } from "~/types/auth/user"
import type {
  CompanyServer,
  MarketIdProductId,
} from "~/types/market/ProfileCompany"
import type { ProductUser } from "~/types/product/data.db"
import type { IdValid } from "~/types/product/findId"
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

  MarketProduct: z.object({
    id_company: z.number().min(1),
    id_product: z.number().min(1),
  }) satisfies ZodType<MarketIdProductId>,

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
  }) satisfies ZodType<CompanyServer>,

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
    email: z.string(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    password: z.string(),
    id_trolly: z.string().nullable(),
    id_role: z.string().nullable(),
    id_follow: z.number().nullable(),
  }) satisfies ZodType<UserCreate>,

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
