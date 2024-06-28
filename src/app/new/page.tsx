"use client"

import FormContentCreateProduct from "@/components/generic/contentNewProduct/FormContentCreateProduct";
import UploaderImage from "../../components/imageKit/UploaderImage"
import { useCreateProductRequest } from "@/hooks/useCreateProductRequest";

export default function NewPostPage() {
    const {handleSubmitForm, files, setFiles, isLoadignResponse} = useCreateProductRequest()
    return (
        <form action={handleSubmitForm} className="form-create-product">
            <UploaderImage
                files={files}
                setFiles={setFiles}
            />
            <FormContentCreateProduct isLoadignResponse={isLoadignResponse} />
        </form>
    )
}