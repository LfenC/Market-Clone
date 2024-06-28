"use server"

import { adProductModel } from "@/models/AdProduct"
import { authOptions } from "@/util/authOptions"
import { mongooseConnect } from "@/util/mongooseConnect"
import { getServerSession } from "next-auth"

export async function addForm(formData: FormData) {
    const {files, ...data} = Object.fromEntries(formData)
    await mongooseConnect()
    const session = await getServerSession(authOptions)
    const adProduct = {
        ...data,
        files: JSON.parse(files as string),
        userEmail: session?.user?.email as string
    }
    const createProduct = await adProductModel.create(adProduct)
    return JSON.parse(JSON.stringify(createProduct))
}