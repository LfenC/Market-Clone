import { ImageProps } from "next/image";

export type myImageKitProps = {
    src: string;
    width: number;
    height?: number;
    quality?: number | undefined;
    aiCrop?: boolean;
}

export type imageProps = ImageProps & {
    width: number;
    height?: number;
    aiCrop?: boolean;
  }