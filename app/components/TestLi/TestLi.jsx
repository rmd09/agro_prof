"use client";

import { useState } from "react";
import styles from "./TestLi.module.css";

export const TestLi = (props) => {

    return (
        <button onClick={() => {props.click(props.number)}}>
            <li className={`${styles["main"]} ${props.isClicked && styles["main__clicked"]}`}>
                <h5 className={styles["text"]}>{props.value}</h5>
            </li>
        </button>
    )
}