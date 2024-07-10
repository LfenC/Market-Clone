"use client"

import { imageProps, myImageKitProps } from "@/types/myImageKitProps";
import Image from "next/image";

const imageKitLoader = ({ src, width, quality, height, aiCrop } : myImageKitProps) => {
  if(src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  if(height && aiCrop) {
    params.push(`h-${height}`)
  }
  if(aiCrop) {
    params.push(`fo-auto`)
  }
  const paramsString = params.join(",");
  let urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string;
  if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}

export default function MyImageKit (props: imageProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      loader={loader => imageKitLoader({ ...loader, width: props.width, height: props.height, aiCrop: props.aiCrop})}
      {...props}
    />
  )
}
