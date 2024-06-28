import styles from "../../app/styles/uploaderImg.module.css"
import ContainerImageFile from "../generic/contentNewProduct/ContainerImageFile";
import ImageFileData from "./ImageFileData";
import { NewPageProps } from "@/types/newPageProps";

export default function UploaderImage({files, setFiles} : NewPageProps) {
  return (
    <div className={`${styles.containerUpload}`}>
      <ContainerImageFile setFiles={setFiles} />
      <ImageFileData files={files} setFiles={setFiles}/>
    </div>
  );
}
