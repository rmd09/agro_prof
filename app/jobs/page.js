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

const data1 = [{
    imagePath: "/back.jpg",
    title: "Програмист",
    text: "Очень важный человек в сфере оборудования",
    money: "От 90 тыс. р.",
}, {
    imagePath: "/back.jpg",
    title: "Програмист",
    text: "Очень важный человек в сфере оборудования",
    money: "От 90 тыс. р.",
}, {
    imagePath: "/back.jpg",
    title: "Програмист",
    text: "Очень важный человек в сфере оборудования",
    money: "От 90 тыс. р.",
},{
    imagePath: "/back.jpg",
    title: "Програмист",
    text: "Очень важный человек в сфере оборудования",
    money: "От 90 тыс. р.",
},{
    imagePath: "/back.jpg",
    title: "Програмист",
    text: "Очень важный человек в сфере оборудования",
    money: "От 90 тыс. р.",
},{
    imagePath: "/back.jpg",
    title: "Програмист",
    text: "Очень важный человек в сфере оборудования",
    money: "От 90 тыс. р.",
}];