const compose = (...funcs) => (Wrapped) => {
    return funcs.reduceRight((prev, f) => f(prev), Wrapped);
}

export default compose;

