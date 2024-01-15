export function changeLetterColor(string) {
  let firstWord = string.split(" ")[0];
  let next = "-&-";
  for (const word of string.split(" ")) {
    if (next === "-&-") {
      next = "";
      continue;
    }
    next += word;
  }
  const firstWordLength = firstWord.length;
  let part1 = firstWord.substring(0, firstWordLength - 2);
  let part2 = firstWord.substring(firstWordLength - 2, firstWordLength - 1);
  let part3 = firstWord.substring(firstWordLength - 1);
  return part1 + "<span>" + part2 + "</span>" + part3 + " " + next;
}
