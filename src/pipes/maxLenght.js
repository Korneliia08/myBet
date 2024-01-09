export const maxLenght = (content, maxSize) => {
    if (!content) {
        return "";
    }
    if (content.length >= maxSize) {
        return content.substring(0, maxSize) + "....";
    }
    return content;
}
