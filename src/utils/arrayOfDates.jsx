import dayjs from 'dayjs';

const startDate = new Date('2023-01-16');

function getDatesInRange(selectDay) {
  const date = new Date(startDate.getTime());
  const endDate = new Date();
  const fechaActual = new Date();
  endDate.setDate(fechaActual.getDate() + 7);

  const dates = [];

  while (date <= endDate) {
    dates.push({ day: new Date(date), formatDate: dayjs(date).format('YYYY-MM-DD') });
    date.setDate(date.getDate() + 1);
  }
  const arrayDates = dates.map(({ day, formatDate }) => {
    const today = day.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
      === fechaActual.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    return {
      day: day
        .toLocaleDateString(undefined, { weekday: 'long' })
        .substring(0, 3),
      numDay: String(day.getDate()).padStart(2, '0'),
      today,
      formatDate,
    };
  });
  const index = arrayDates.findIndex((day) => day.formatDate === selectDay);
  return {
    arrayDates,
    index,
  };
}

export default getDatesInRange;
