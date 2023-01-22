export const useDateFormatter = () => {
  return (prefixTime) => {
    return new Date(prefixTime).toDateString();
  };
};
