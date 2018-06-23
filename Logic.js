//Solution #1

const If = func => a => b => func(a)(b);
const True = a => b => a;
const False = a => b => b;
export {If, True, False};

//Solution #2

export const True = x => () => x;
export const False = () => y => y;
export const If = f => f;
