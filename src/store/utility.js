export const updateObject = (oldObj, undetedProp) => {
    return {
        ...oldObj,
        ...undetedProp
    }
};