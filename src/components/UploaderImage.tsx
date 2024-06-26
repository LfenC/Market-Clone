import { ImageIcon } from "@/components/IconsSvg";
import Uploader from "@/components/Uploader";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import React, { Dispatch, SetStateAction, useState } from "react";
import UploaderUrlImage from "./UploaderUrlImage";

export interface NewPageProps {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>;
}

export default function UploaderImage({files, setFiles} : NewPageProps) {

  const [isLoadingImage, setIsLoadingImage] = useState(false)

  const classNameBasedProgressImage = isLoadingImage ? "bg-red-200 text-black" : "bg-blue-700 text-white"

  const textProgressImage = isLoadingImage ? "Loanding" : "Add Photos"

  function handleSubmitImageKit (file: any) {
    setFiles(prev => [...prev, file])
    setIsLoadingImage(false)
  }

  function handleUploadStart() {
    setIsLoadingImage(true)
  }

  return (
    <div className="grow pt-8">
        <div className="bg-gray-200 w-[80%] p-7 mx-auto rounded-[15px] sm:translate-y-2">
          <h2 className="text-blue-700 text-xl font-bold text-center">
            Agrega las imagenes de tu producto
          </h2>
          <div className="flex flex-col justify-center items-center">
            <ImageIcon />
            <label className={`${classNameBasedProgressImage} text-lg text-center py-2 px-7 rounded-[15px] cursor-pointer`}
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
        <div className="grid grid-cols-3 gap-4">
        {files.map((text) => (
          <div className="size-17 mx-auto translate-y-7" key={text.fileId}>
            <UploaderUrlImage file={text}/>
          </div>
        ))}
        </div>
    </div>

  );
}
