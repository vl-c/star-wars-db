const compose = (...args) => (item) => {
    return args.reduceRight((prev, fn) => fn(prev), item);
}

export default compose;