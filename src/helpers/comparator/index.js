export const propComparator = (prop) => {
  return (a, b) => {
    const tempA = a[prop];
    const tempB = b[prop];
    return tempA > tempB ? 1 : tempA < tempB ? -1 : 0;
  };
};
