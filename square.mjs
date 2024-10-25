export const squareArea = (sideLength) => {
  if (sideLength <= 0) {
    throw new Error('Side length must be a positive number');
  }

  return sideLength ** 2;
}