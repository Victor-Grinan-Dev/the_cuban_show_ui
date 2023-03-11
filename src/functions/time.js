export const getReadableTime = (timestamp) => {
    return new Date(timestamp?.seconds*1000);
};

export const createReadableTime = () => {
    const timestamp = new Date();
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();
    const year = timestamp.getFullYear()

    return `${day}/${month}/${year}`;
}