"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { jobData, test } from "../data/data";
import { TestLi } from "../components/TestLi/TestLi";
import { InformBlockList } from "../components/InformBlockList/InformBlockList";
import { deleteTestResult, getTestResult, setTestResult } from "../data/api-tools";

export default function Job() {
    const [useIndex, setUseIndex] = useState(0);
    const [useCurrentQuestion, setUseCurrentQuestion] = useState(test.questions[useIndex]);
    const [useScores, setUseScores] = useState({});
    const [useHasTestStarted, setUseHasTestStarted] = useState(false);
    const [useHasTestFinished, setUseHasTestFinished] = useState(false);
    const [useClickedKey, setUseClickedKey] = useState(-1);
    const [useJobsTop, setUseJobsTop] = useState({});
    const [useHasDataDownload, setUseHasDataDownload] = useState(false); //Что бы не лагало
    const numberOfTasks = test.questions.length;

    useEffect(() => {
        const res = getTestResult();
        if (res) {
            setUseJobsTop(res);
            setUseHasTestFinished(true);
            setUseHasDataDownload(true);
        } else {
            initScores();
            setUseHasDataDownload(true);
        }
    }, []);

    const initScores = () => {
        const data = jobData.map(() => {
            return 0;
        });

        setUseScores(data);
    }

    const clickHandler = (key) => {
        if (key === useClickedKey) {
            setUseClickedKey(-1);
        } else {
            setUseClickedKey(key);
        }
    }
    const buttonHandler = () => {
        useCurrentQuestion.options[useClickedKey].scores.forEach((value) => {
            useScores[value.job_id] += value.points;
        });
        const index = useIndex + 1;
        setUseIndex(index);
        setUseClickedKey(-1);
        if (index >= test.questions.length) {
            setUseHasTestFinished(true);
            const jobs = getJobTop();
            setUseJobsTop(jobs);
            setTestResult(jobs);
        } else {
            setUseCurrentQuestion(test.questions[index]);
        }
    }
    const buttonRestartHandler = () => {
        setUseClickedKey(-1);
        setUseCurrentQuestion(test.questions[0]);
        setUseHasTestFinished(false);
        setUseHasTestStarted(false);
        setUseIndex(0);
        setUseJobsTop({});
        initScores();
        deleteTestResult();
    }

    const getJobTop = () => {
        const jobDataCopy = jobData;
        let sum = 0;
        useScores.forEach((value) => {
            sum += value;
        });
        useScores.forEach((value, index) => {
            jobDataCopy[index].scores = Math.round(value/sum*100);
        });
        jobDataCopy.sort((a, b) => { //Сортируем от большего к меньшему
            if (a.scores > b.scores) {
                return -1;
            } else if (a.scores === b.scores) {
                return 0;
            } else {
                return 1;
            }
        });
        return jobDataCopy.slice(0, 4);
    }

    return (
        <main className={`${useHasTestFinished ? styles["main__finished"] : styles["main"]} animation`}>
            {
                useHasTestStarted && !useHasTestFinished ? ( //true false - тест
                    <div className={styles["question"]}>
                        <h3 className={styles["task__number"]}>{`${useCurrentQuestion.number}/${numberOfTasks}`}</h3>
                        <h1 className={styles["task__title"]}>{useCurrentQuestion.title}</h1>
                        <ul className={styles["options__section"]}>
                            {
                                useCurrentQuestion.options.map((value, key) => {
                                    return (
                                        <TestLi click={clickHandler} number={key} key={key} value={value.text} isClicked={useClickedKey === key} />
                                    )
                                })
                            }
                        </ul>
                        <button disabled={useClickedKey === -1} onClick={buttonHandler} className={styles["next"]}>{useIndex >= test.questions.length - 1 ? "Завершить" : "Далее"}</button>
                    </div>
                ) : !useHasTestFinished && useHasDataDownload ? ( //false false - начало теста
                    <div className={`${styles["question"]} ${styles["hello"]}`}>
                        <h1 className={`${styles["task__title"]} ${styles["hello__title"]}`}>{test.title}</h1>
                        <h3 className={styles["hello__text"]}>{test.description}</h3>
                        <button onClick={() => {setUseHasTestStarted(true);}} className={`${styles["next"]} ${styles["hello_button"]}`}>Пройти тест</button>
                    </div>
                ) : useHasDataDownload && ( //true true - тест закончен
                    <>
                        <h1 className={styles["finish__title"]}>Поздравляем, тест закончен! Вот твой топ-5 профессий в АПК:</h1>
                        <InformBlockList href="/jobs/seejob" data={useJobsTop} />
                        <button onClick={buttonRestartHandler} className={`${styles["next"]} ${styles["hello_button"]}`}>Пройти тест ещё раз</button>
                    </>
                )
            }
        </main>
    );
}