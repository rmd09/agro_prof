import { InformBlockList } from "../components/InformBlockList/InformBlockList";
import { collegeData } from "../data/data";
import styles from "./page.module.css";

export default function Job() {
    return (
        <main className={`${styles["main"]} animation`}>
            <InformBlockList data={collegeData}/>
        </main>
    );
}