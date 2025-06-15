const jobPath = "currentJob";
const testResultPath = "currentResult"

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

export const setTestResult = (data) => {
    localStorage.setItem(testResultPath, JSON.stringify(data));
}

export const getTestResult = () => {
    const res = localStorage.getItem(testResultPath);
    if (res) {
        return  JSON.parse(res);
    } else {
        return null;
    }
}

export const deleteTestResult = () => {
    localStorage.removeItem(testResultPath);
}