import numeral from 'numeral';

export const numberFormatting = (numb: number) => {
  return numeral(numb).format('0,0');
};
