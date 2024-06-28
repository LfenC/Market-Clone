import { HeaderProps } from "@/types/headerProps";
import ButtonHeader from "./ButtonHeader";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "../../app/styles/header.module.css"

export default function ButtonsSessionActive({session}: HeaderProps) {
    const router = useRouter()
    return (
        <div className={styles.containerButtonsSession}>
            <div className={styles.buttonsSession}>
                <ButtonHeader handleClick={() => router.push("/new")} text="+ New Post" className={styles.borderNewPost}/>
                <ButtonHeader handleClick={() => signOut()} text="Logout" className={styles.borderLogout} />
            </div>
            <div className={styles.containerImg}>
                <Image
                    src={session?.user?.image as string} width={50} height={50}
                    alt={`Photo ${session?.user?.name}`} className={styles.photoUser}
                />
                <span className={styles.nameUser}>{session?.user?.name}</span>
            </div>
        </div>
    )
}