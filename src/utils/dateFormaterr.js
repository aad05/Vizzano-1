export function DateFormatChanger(date) {
  const baseDate = new Date(Number(date));
  let year = baseDate.getFullYear();
  let month = baseDate.getMonth();
  let day = baseDate.getDate();
  return { day, month: month + 1, year };
}
