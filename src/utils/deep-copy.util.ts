const deepCopy = <T = any>(obj: T) => JSON.parse(JSON.stringify(obj));

export default deepCopy;
