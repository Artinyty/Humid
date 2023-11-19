export const required = (value) => {
  if (value) return undefined;
  else return 'Error message'

};

export const maxLehgthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `max Length is ${maxLength} symbols`;
  else return undefined;
};