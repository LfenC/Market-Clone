"use client"
import { IKContext, IKUpload } from "imagekitio-react";
import { IKUploadProps } from "imagekitio-react/dist/types/components/IKUpload/props";

export default function Uploader(props: IKUploadProps) {
    return (
        <IKContext
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
            publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC}
            authenticator={async () => {
                const response = await fetch("/api/imageKit/auth")
                return await response.json()
            }}
        >
            <IKUpload {...props} />
        </IKContext>
    )
}