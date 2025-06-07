const jobPath = "currentJob";

export const setJobData = (data) => {
    localStorage.setItem(jobPath, JSON.stringify(data));
}

export const getJobInfo = () => {
    const data = localStorage.getItem(jobPath);
    if (data) {
        return JSON.parse(data);
    } else {
        return null;
    }
}