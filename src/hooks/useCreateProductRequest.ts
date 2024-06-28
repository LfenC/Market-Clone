import { useState } from "react"
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { useRouter } from "next/navigation";
import { addForm } from "@/app/actions/addForm";

export function useCreateProductRequest() {
  const [files, setFiles] = useState <UploadResponse[]>([])
  const [isLoadignResponse, setIsLoadignResponse] = useState(false)
  const router = useRouter()

  async function handleSubmitForm(formData: FormData) {
    formData.set("files", JSON.stringify(files))
    const response = await addForm(formData)
    console.log({ response })
    if (response) {
      setIsLoadignResponse(true)
      return router.push(`/new/${response._id}`)
    }
  }
  return { files, setFiles, isLoadignResponse, handleSubmitForm}
}
