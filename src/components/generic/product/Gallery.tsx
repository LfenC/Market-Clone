'use client'

import { UploaderUrlImage, UploaderUrlImageKit } from "@/components/imageKit/UploaderUrlImage";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { useState } from "react";

export default function Gallery({ files} : {files: UploadResponse[]}) {

    const [isActiveFile, setisActiveFile] = useState<UploadResponse>(files?.[0] || null)

    return (
        <div className="grow flex justify-center items-center bg-black text-white">
            <div className="grow">
                {files && (
                    <div>
                        <UploaderUrlImageKit file={isActiveFile}/>
                    </div>
                )}
            </div>
            {files.map((text: any) => (
                <div key={text?.fileId} className="flex gap-10">
                    <UploaderUrlImage onClick={() => setisActiveFile(text)} file={text}/>
                </div>
            ))}
        </div>
    )
}