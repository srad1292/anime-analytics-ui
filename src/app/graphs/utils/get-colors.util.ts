export function getColors(labels: string[] = []) {
    let hex: string;
    return labels.map((label: string) => {
        hex = Math.floor(Math.random()*16777215).toString(16);
        return `#${hex}`;
    });
}