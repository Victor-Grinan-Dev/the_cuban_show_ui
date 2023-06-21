import { useEffect, useState } from 'react';

const getLocalStorage = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
};

export default function useLocalStorage( key, initialValue){
    const [value, setValue] = useState(()=>{
        return getLocalStorage(key, initialValue);
    });

    useEffect(()=> {
        localStorage.setItem(key,JSON.stringify(value));
        // eslint-disable-next-line
    }, [value])
    return [value, setValue];
} 



 