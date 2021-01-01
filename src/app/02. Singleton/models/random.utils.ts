// resource: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}
