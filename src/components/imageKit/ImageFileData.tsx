import { NewPageProps } from "@/types/newPageProps"
import styles from "../../app/styles/uploaderImg.module.css"
import { UploaderUrlImage } from "./UploaderUrlImage"

export default function ImageFileData({ files} : NewPageProps) {
    return (
        <div className={`${styles.containerFiles}`} >
            {files?.map((text: any) => (
            <div className={`${styles.containerResponseImg}`} key={text.fileId}>
                <UploaderUrlImage file={text}/>
            </div>
            ))}
        </div>
    )
}