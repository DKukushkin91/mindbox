export const debounce = <T extends (...args: Parameters<T>) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void => {
    let timeoutId: NodeJS.Timeout;

    return (...args: Parameters<T>): void => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};
