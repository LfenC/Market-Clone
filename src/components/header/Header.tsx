"use client"

import Link from "next/link";
import ButtonHeader from "./ButtonHeader";
import { signIn } from "next-auth/react";
import { HeaderProps } from "@/types/headerProps";
import styles from "../../app/styles/header.module.css"
import ButtonsSessionActive from "./ButtonsSessionActive";

export default function Header({session} : HeaderProps) {
    return (
        <header className={styles.headerMarket}>
            <Link href="/" className={styles.titleMarket}>MarketPlaceClone</Link>
            <div className={styles.containerButtons}>
                {session && <ButtonsSessionActive session={session}/> }
                {!session && <ButtonHeader handleClick={() => signIn("google")} text="Login" className={styles.borderLogin} /> }
            </div>
        </header>
    )
}