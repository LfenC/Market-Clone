"use server"

import Gallery from "@/components/generic/product/Gallery"
import { adProductModel } from "@/models/AdProduct"
import { newProductParams } from "@/types/newProductParams"
import { mongooseConnect } from "@/util/mongooseConnect"

export default async function PageProductId(props : newProductParams) {
    await mongooseConnect()
    const response = await adProductModel.findById(props.params.id)

    return (
        <div className="flex inset-0 absolute top-20">
            <Gallery files={response.files}/>
            <div className="flex flex-col w-2/3 grow shrink-0">
            </div>
        </div>
    )
}