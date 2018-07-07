const isPerfect = (n) => {
    let result = 0;
    if (n === 0) return false;
    for (let i = 1; i < n; i++) {
        if(n%i === 0){
            result += i;
        };
    };
    return result === n ? true : false;  
};
console.log(isPerfect(5))