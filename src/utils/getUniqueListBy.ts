export const getUniqueListBy = (arr: any[], key: string) => {
  return [...new Map(arr.map(item => [item[key], item])).values()];
};
