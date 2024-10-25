export const circumference = (radius) => {
  if (radius <= 0) {
    throw new Error('Radius must be a positive number');
  }

  return 2 * Math.PI * radius;
}