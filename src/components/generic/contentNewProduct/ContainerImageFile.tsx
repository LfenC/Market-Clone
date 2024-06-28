import styles from "../../../app/styles/uploaderImg.module.css"
import { NewPageProps } from "@/types/newPageProps"
import { ImageIcon } from "../IconsSvg"
import Uploader from "@/components/imageKit/Uploader"
import { useUploaderImage } from "@/hooks/useUploaderImage"

export default function ContainerImageFile({ setFiles }: NewPageProps) {
  const {classNameBasedProgressImage, isLoadingImage, handleSubmitImageKit, textProgressImage, handleUploadStart} = useUploaderImage(setFiles)

  return (
      <div className={`${styles.containerImg}`}>
        <h2 className={`${styles.titleAddImg}`}>
          Agrega las imagenes de tu producto
        </h2>
        <div className={`${styles.containerFlexImg}`}>
          <ImageIcon />
          <label className={`${styles.addFiles} ${classNameBasedProgressImage}`}
          >
            <Uploader
              disabled={isLoadingImage}
              onUploadStart={handleUploadStart}
              onSuccess={(file) => handleSubmitImageKit(file)}
            />
            {textProgressImage}
          </label>
        </div>
      </div>
  )
}