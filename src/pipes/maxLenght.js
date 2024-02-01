export const maxLenght = (content, maxSize, short = false) => {
  if (!content) {
    return "";
  }
  const dots = short ? ".." : "....";
  if (content.length > maxSize) {
    return content.substring(0, maxSize) + dots;
  }
  return content;
};
