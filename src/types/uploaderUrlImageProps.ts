import { UploadResponse } from "imagekit/dist/libs/interfaces";

export interface uploaderUrlImageProps {
    file: UploadResponse;
    onClick: () => void;
}