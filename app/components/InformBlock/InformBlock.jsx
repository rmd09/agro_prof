"use client"

import Link from "next/link";
import styles from "./InformBlock.module.css";
import { setJobData } from "../../data/api-tools";

export const InformBlock = (props) => {
    const clickHandler = () => {
        setJobData({...props});
    }

    return (
        <Link onClick={clickHandler} href={props.href}>
            <li className={styles["main__section"]}>
                <h4 className={styles["title"]}>{props.title}</h4>
                <img src={props.imagePath} alt={props.title} className={styles["img"]} />
                <p className={styles["text"]}>{props.text}</p>
                <h5 className={styles["money__value"]}>{props.money}</h5>
            </li>
        </Link>
    )
}