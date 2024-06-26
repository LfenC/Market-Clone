"use client"

import Link from "next/link";
import ButtonHeader from "./ButtonHeader";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeaderProps {
    session: Session | null
}

export default function Header({session} : HeaderProps) {

    const router = useRouter()

    return (
        <header className="border-b-2 p-4 flex sm:flex-col sm:gap-y-4 sm:-translate-x-4 md:-translate-x-0 md:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold text-blue-700">MarketPlaceClone</Link>
            <div className="flex gap-x-3">
                {session ? (
                    <div className="flex md:flex-row sm:flex-col gap-y-4">
                        <div className="flex md:gap-x-3 sm:gap-x-10">
                        <ButtonHeader handleClick={() => router.push("/new")} text="+ New Post" className="border-blue-700"/>
                        <ButtonHeader handleClick={() => signOut()} text="Logout" className="border-red-500"/>
                        </div>
                        <div className="flex justify-center items-center ml-3 gap-x-3">
                            <Image
                                src={session?.user?.image as string} width={50} height={50}
                                alt={`Photo ${session?.user?.name}`} className="rounded-[10%]"
                            />
                            <span className="text-lg font-bold">{session?.user?.name}</span>
                        </div>
                    </div>
                ) : (
                    <ButtonHeader handleClick={() => signIn("google")} text="Login" className="border-blue-400"/>
                )}
            </div>
        </header>
    )
}