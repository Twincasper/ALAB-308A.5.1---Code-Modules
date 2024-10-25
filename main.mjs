import { triangleArea } from "./triangle.mjs";
import { circumference } from "./circle.mjs";
import { squareArea } from "./square.mjs";

try {
  const base = 5;
  const height = 12;
  const area = triangleArea(base, height);
  console.log(`Triangle area: ${area}`);
} catch (error) {
  console.error(error.message);
}

try {
  const radius = 8;
  const circumferenceResult = circumference(radius);
  console.log(`Circle circumference: ${Math.floor(circumferenceResult)}`);
} catch (error) {
  console.error(error.message);
}

try {
  const sideLength = 10;
  const areaResult = squareArea(sideLength);
  console.log(`Square area: ${areaResult}`);
} catch (error) {
  console.error(error.message);
}