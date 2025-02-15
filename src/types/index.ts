import { boolean, number, object, string, array, InferOutput } from 'valibot'

export const DraftroductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id:number(),
    name: string(),
    price: number(),
    availability: boolean()
})

export const ProductsSchema = array(ProductSchema)

export type Product = InferOutput<typeof ProductSchema>