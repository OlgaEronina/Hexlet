const invertCase = (stroke) => {
    let result = '';
    for (let i = 0; i < stroke.length; i++) {
        const upper = stroke[i] === stroke[i].toUpperCase();
        result += upper ? stroke[i].toLowerCase() : stroke[i].toUpperCase();
    };
    return result;
};

console.log(invertCase('HeLlo'))