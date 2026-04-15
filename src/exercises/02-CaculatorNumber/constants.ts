export const getCurrentNumber = (str: string) => {
  const parts = str.split(/[\+\-\*\/]/);
  return parts[parts.length - 1];
};