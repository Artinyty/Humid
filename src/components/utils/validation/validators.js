export const required = (value) => {
  if (value) return undefined;
  else return 'Error message'

};

export const maxLehgthCreator = (maxLength) => (value) => {
  if (value.lenght > maxLength) return `max Lenhgt is ${maxLength} symbols`;
  else return undefined;
};

