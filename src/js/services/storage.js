export function saveData(data, key) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getData(key) {
    try {
        const data = localStorage.getItem(key);

        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.log(error.message);
    }
}
