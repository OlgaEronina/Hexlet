const getLength = str => str.length;

const substr = (stroke, idx = 0, len = getLength(stroke)) => {
    const length = getLength(stroke);

    if (idx >= length || len === 0) {
        return ''
    }

    const currentIdx = idx < 0 ? 0 : idx;
    let lastIdx = currentIdx + (len - 1);
    if (lastIdx + 1 < currentIdx) {
        lastIdx = currentIdx;
    } else if (lastIdx > length - 1) {
        lastIdx = length - currentIdx - 1;
    }

    let result = '';
    for (let i = currentIdx; i <= lastIdx; i++) {
        result = `${result}${stroke[i]}`;
        if (len > length) {
            len = length;
            lastIdx = length - 1;
        }
    }
    return result;
}
console.log(substr('abba', 1, 10));
