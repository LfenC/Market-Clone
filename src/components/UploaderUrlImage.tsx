import { UploadResponse } from "imagekit/dist/libs/interfaces";
import  Link  from "next/link"

export default function UploaderUrlImage({file} : {file: UploadResponse}) {

    if(file.fileType === "image") {
        return (
            <Link target="_blank" href={file?.url} className="cursor-pointer">
                <img
                    src={file?.url+"?tr=w-150,h-150,fo-auto"}
                    alt={`${file.filePath}`}
                    className="rounded-[10px]  hover:transition-all hover:scale-100"
                />
            </Link>
        )
    }

    return (
        <div>{file?.url}</div>
    )
}