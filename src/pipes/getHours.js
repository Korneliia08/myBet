export function getHour(date) {
  const time = new Date(date).toLocaleString();
  let hour = time.split(" ")[1];
  hour = hour.slice(0, 5);
  return hour;
}
