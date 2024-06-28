"use server"

import { UploaderUrlImage, UploaderUrlImageKit } from "@/components/imageKit/UploaderUrlImage"
import { adProductModel } from "@/models/AdProduct"
import { newProductParams } from "@/types/newProductParams"
import { mongooseConnect } from "@/util/mongooseConnect"

export default async function PageProductId(props : newProductParams) {
    await mongooseConnect()
    const response = await adProductModel.findById(props.params.id)

    return (
        <div className="flex w-full">
            <div className="grow w-[50%] bg-black text-white">
                <div>
                    {response.files && (
                        <UploaderUrlImageKit file={response.files[0]}/>
                    )}
                </div>
                {response.files.map((text: any) => (
                    <div key={text?.fileId}>
                        <UploaderUrlImage file={text}/>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center border-[2px] border-t-2 border-blue-600 p-4 w-[50%] ">
                <h1 className="text-2xl font-bold !text-center">Muchas gracias por añadir tu producto, esperamos y puedas encontrar un vendedor!!</h1>
                <div className="mt-4 flex justify-start items-center gap-x-5 text-xl font-extrabold border-[2px] border-red-500 w-full p-3 rounded-[5px]">
                    <span>Titulo del producto:</span>
                    <h2>{response.title}</h2>
                </div>
            </div>
        </div>
    )
}