export function beautifyArray(arr: []): string {
    return arr.map(item => {
        if (typeof item === 'string') {
            return item;
        } else {
            return JSON.stringify(item);
        }
    }).join(', ');
}