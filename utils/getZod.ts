import type { Company } from "@prisma/client"
import { ZodType, z } from "zod"
import type { SignInProps, SignUpProps } from "~/types/auth/user"
import type {
  CompanyServer,
  MarketIdProductId,
} from "~/types/market/ProfileCompany"
import type {
  ProductCreateUser,
  ProductUpdateUser,
} from "~/types/product/data.db"
import type { DeleteDataDB } from "~/types/product/findId"
const noSymbolString = z
  .string()
  .min(1)
  .max(250) // Set the maximum length to 250, will be adjusted for each field
  .regex(/^[a-zA-Z0-9 ]*$/, "String cannot include symbols")

export default {
  idNumber: z.number().min(1),
  idString: z.string().uuid(),

  deleteSchema: z.object({
    id: z.number().min(1),
    id_user: z.string().uuid(),
  }) satisfies ZodType<DeleteDataDB>,

  MarketProductSchema: z.object({
    id_company: z.number().min(1),
    id_product: z.number().min(1),
  }) satisfies ZodType<MarketIdProductId>,

  companyCreateSchema: z.object({
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

  productCreateSchema: z.object({
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
  }) satisfies ZodType<ProductCreateUser>,

  productUpdateSchema: z.object({
    id: z.number(),
    name: noSymbolString.min(3).max(50),
    description: noSymbolString.min(3).max(250),
    brand: noSymbolString.min(3).max(250),
    id_type: noSymbolString.min(3).max(20),
    price: z.number(),
    image: z.string(),
    stock: z.number(),
    id_user: z.string().uuid(),
  }) satisfies ZodType<ProductUpdateUser>,

  signUpSchema: z
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

  signInSchema: z.object({
    email: z.string().email().min(10),
    password: z.string().min(8),
  }) satisfies ZodType<SignInProps>,
}
