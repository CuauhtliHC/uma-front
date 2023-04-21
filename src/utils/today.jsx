import dayjs from 'dayjs';

const dateFormat = dayjs().format('YYYY-MM-DD');
const dateDiagonalFormat = (day) => {
  return dayjs(day).format('DD/MM/YY');
};

export { dateFormat, dateDiagonalFormat };
