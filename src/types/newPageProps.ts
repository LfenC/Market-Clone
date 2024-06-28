import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { Dispatch, SetStateAction } from "react";

type FileType = UploadResponse[]

export type SetFiles = Dispatch<SetStateAction<FileType>>

export interface NewPageProps {
    files?: UploadResponse[];
    setFiles: SetFiles;
}