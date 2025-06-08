import Link from "next/link";
import styles from "./Tag.module.css";

export const Tag = (props) => {
    return (
        <h6 className={styles["main"]}>{props.value}</h6>
    );
}