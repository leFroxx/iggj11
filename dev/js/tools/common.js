export const intify = (x) => {
    return intval(x);
}

export const randomInt = (max) => {
    const r = Math.floor(Math.random()*(max+1));
    return r;
}

export const random = (min, max) => {
    return randomInt(max - min) + min;
}

export const randomWithDiff = (min, max, minDiff, maxDiff) => {
    const diff = random(minDiff, maxDiff);
    const finalMin = random(min, max - diff);
    const finalMax = finalMin + diff;
    return [
        finalMin,
        finalMax
    ];
}



/* EXTENSIONS */

/* Array */
Array.getRandom = (array) => {
    if (!array instanceof Array) {
        console.error(array + " is not an array");
        return;
    }
    return array[randomInt(array.length-1)];
}

/* Object */
Object.forEach = (object, func) => {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            func(key, object[key]);
        }
    }
}
