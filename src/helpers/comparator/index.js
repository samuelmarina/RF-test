export const propComparator = (prop) => {
  return (a, b) => {
    const tempA = a[prop].toLowerCase();
    const tempB = b[prop].toLowerCase();
    return tempA > tempB ? 1 : tempA < tempB ? -1 : 0;
  };
};
