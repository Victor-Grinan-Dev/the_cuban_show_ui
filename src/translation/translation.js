import toEs from './es.json';

export const translate = (phrase, toLang='es') => {
    switch (toLang) {
        case 'es':
            if(toEs[phrase]){
                return toEs[phrase];
            }else
            return phrase;
        default:
            return phrase;
    }
}