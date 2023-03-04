export const getReadableTime = (timestamp) => {
    //console.log(new Date(timestamp.seconds*1000));
    return new Date(timestamp.seconds*1000);
};

// const START_YEAR = 1970;

// const minutesfromSeconds = (seconds) => {
//     return seconds / 60;
// };

// const hoursFromMinutes = (minutes) => {
//     return minutes / 60;
// };

// const daysFromHours = (hours) => {
//     return hours / 24;
// };

// const amountOfLeapYears = (currentYear) => {
//     return (currentYear - START_YEAR) / 4;
// }

// const isLeapYear = () => {

// }

export const createReadableTime = () => {
    const timestamp = new Date();
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();
    const year = timestamp.getFullYear()

    return `${day}/${month}/${year}`;
}