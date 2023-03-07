export const arrayOfValues = (object) => {
    const values = [];
    for (let value of object){
        values.push(value);
    }
    return values;
}