export function makeAction(type) {
    return payload => ({
        type,
        payload
    });
}

export default makeAction;
