const apply = (times, func, arg) => {
  if (times === 0) {
    return arg;
  }
 return apply(times-1,func,func(arg));
}

export default apply;
