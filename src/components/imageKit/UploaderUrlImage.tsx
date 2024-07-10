/* eslint-disable @next/next/no-img-element */
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import  Link  from "next/link"
import MyImageKit from "./MyImageKit"
import React from "react";
import { uploaderUrlImageProps } from "@/types/uploaderUrlImageProps";

export function UploaderUrlImage({file, onClick} : uploaderUrlImageProps) {

    function handlEvent(ev: React.MouseEvent) {
        if (onClick) {
            ev.preventDefault()
            return onClick()
        }
        location.href = file.url
    }

    if(file?.fileType === "image") {
        return (
            <Link onClick={handlEvent} target="_blank" href={file?.url} className="cursor-pointer">
                <MyImageKit
                    width={300}
                    height={300}
                    aiCrop={true}
                    src={file?.filePath+"?tr=w-150,h-150,fo-auto"}
                    alt={`${file.filePath}`}
                    className="rounded-[10px] hover:transition-all hover:scale-100"
                />
            </Link>
        )
    }

    return (
        <div>{file?.url}</div>
    )
}

export function UploaderUrlImageKit({file} : {file: UploadResponse}) {
    if(file?.fileType === "image") {
        return (
            <MyImageKit aiCrop={true} alt={`${file.filePath}`} src={file.filePath} width={2048} height={2048}/>
        )
    }
    return (
        <div>{file?.url}</div>
    )
}