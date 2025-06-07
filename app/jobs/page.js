import styles from "./page.module.css";
import { InformBlockList } from "../components/InformBlockList/InformBlockList";
import { data } from "../data/data";

export default function Job() {
    return (
        <main className={styles["main"]}>
            <InformBlockList data={data} />
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