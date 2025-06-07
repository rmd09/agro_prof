"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getJobInfo } from "@/app/data/api-tools";

export default function SeeJobs() {
    const [useData, setUseData] = useState();

    useEffect(() => {
        setUseData(getJobInfo());
    }, []);

    return (
        <div>{useData?.title}</div>
    );
}