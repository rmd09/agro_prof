"use client"

import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const path = usePathname();

    return(
        <header className={styles["header"]}>
            <Link href={"/"} className="animation">
                <img className={styles["logo"]} src="/logo.svg" alt="logo" />
            </Link>
            <div className={`${styles["buttons"]} animation`}>
                <Link href={"/test"} className={`${styles["but"]} ${path == "/test" && styles["but-cliked"]}`}>Пройти тест</Link>
                <Link href={"/jobs"} className={`${styles["but"]} ${path == "/jobs" && styles["but-cliked"]}`}>Смотреть профессии</Link>
                <Link href={"/colleges"} className={`${styles["but"]} ${path == "/colleges" && styles["but-cliked"]}`}>Смотреть коледжи</Link>
            </div>
        </header>
    );
}