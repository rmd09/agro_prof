import styles from "./page.module.css";
import { InformBlockList } from "../components/InformBlockList/InformBlockList";
import { jobData } from "../data/data";

export default function Job() {
    return (
        <main className={`${styles["main"]} animation`}>
            <InformBlockList data={jobData} />
        </main>
    );
}