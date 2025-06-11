import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles["main"]}`}>
      <h2 className={`${styles["h2"]} animation`}>АПК - это не просто трактора и поля!</h2>
      <h3 className={`${styles["text"]} animation`}>Современный агропром — это мир высоких технологий, где дроны сканируют поля, биотехнологи создают новые культуры, а IT-специалисты управляют "умными" фермами. Выбирая профессию в АПК, ты:</h3>
      <ul className={`${styles["ul"]} animation__reasons`}>
        <li className={styles["li"]}>Влияешь на продовольственную безопасность страны</li>
        <li className={styles["li"]}>Работаешь с прорывными технологиями (AI, робототехника, генетика)</li>
        <li className={styles["li"]}>Получаешь профессию будущего с зарплатой выше рынка</li>
        <li className={styles["li"]}>Решаешь глобальные экологические вызовы</li>
      </ul>
      <h1 className={`${styles["h1"]} animation`}>Почему АПК?</h1>
      <div className={styles["pluses__container"]}>
        <h6 className={`${styles["h6"]} animation__reasons`}>87% профессий АПК требуют IT-навыков</h6>
        <h6 className={`${styles["h6"]} animation__reasons`}>Зарплата биотехнолога: от 80 тыс. руб. на старте</h6>
        <h6 className={`${styles["h6"]} animation__reasons`}>300+ учебных программ в РФ</h6>
      </div>
      <Link href="/jobs"><h2 className={`${styles["h2"]} animation`}>Найди свою профессию в агропромышленном комплексе!</h2></Link>
    </main>
  );
}
