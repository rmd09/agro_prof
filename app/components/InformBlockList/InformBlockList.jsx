import styles from "./InformBlockList.module.css";
import { InformBlock } from "../InformBlock/InformBlock";

export const InformBlockList = (props) => {
    return (
        <ul className={styles["ul"]}>
            {props.data?.map((value, key) => {
                return (
                    <InformBlock href={props.href} key={key} {...value}/>
                )
            })}
        </ul>
    );
}