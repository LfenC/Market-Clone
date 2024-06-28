"use client"

import { myImageKitProps } from "@/types/myImageKitProps";
import Image from "next/image";

const imageKitLoader = ({ src, width, quality } : myImageKitProps) => {
  if(src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  let urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string;
  if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}

 export default function MyImageKit (props: myImageKitProps) {
  return (
    <Image
      loader={imageKitLoader}
      {...props}
      alt=""
    />
  )
}
