import { SetFiles } from "@/types/newPageProps"
import { useState } from "react"
import styles from "../app/styles/uploaderImg.module.css"

export function useUploaderImage(setFiles : SetFiles) {
  const [isLoadingImage, setIsLoadingImage] = useState(false)
  const classNameBasedProgressImage = isLoadingImage ? styles.isLoadingImagePending : styles.isLoadingImage
  const textProgressImage = isLoadingImage ? "Loanding" : "Add Photos"
  function handleSubmitImageKit (file: any) {
    setFiles(prev => [...prev, file])
    setIsLoadingImage(false)
  }
  function handleUploadStart() {
    setIsLoadingImage(true)
  }
  return { isLoadingImage, classNameBasedProgressImage, textProgressImage, handleSubmitImageKit, handleUploadStart}
}