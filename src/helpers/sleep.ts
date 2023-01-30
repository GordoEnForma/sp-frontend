export const sleep = (time: number = 1): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time * 1000)
    })
}