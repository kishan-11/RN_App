export const convertToHexadecimal = (value: number): string => {
  return `0${value.toString(16)}`.slice(-2).toUpperCase();
};

export const getHexadecimalColor = ({
  red,
  green,
  blue,
}: {
  red: number;
  green: number;
  blue: number;
}): string => {
  return `#${convertToHexadecimal(red)}${convertToHexadecimal(
    green,
  )}${convertToHexadecimal(blue)}`;
};
