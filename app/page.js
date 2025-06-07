import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles["main"]}`}>
      <h2 className={`${styles["h2"]} animation`}>Найди свою профессию в агропромышленном комплексе!</h2>
      <h1 className={`${styles["h1"]} animation`}>Почему АПК?</h1>
      <div className={styles["pluses__container"]}>
        <h6 className={`${styles["h6"]} animation__reasons`}>87% профессий АПК требуют IT-навыков</h6>
        <h6 className={`${styles["h6"]} animation__reasons`}>Зарплата биотехнолога: от 80 тыс. руб. на старте</h6>
        <h6 className={`${styles["h6"]} animation__reasons`}>300+ учебных программ в РФ</h6>
      </div>
    </main>
  );
}
