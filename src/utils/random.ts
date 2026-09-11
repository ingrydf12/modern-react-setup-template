export function randomIntInclusive(min: number, max: number): number;
export function randomIntInclusive(max: number): number;
export function randomIntInclusive(minOrMax: number, max?: number) {
  const minCeiled = Math.ceil(max === undefined ? minOrMax : 0);
  const maxFloored = Math.floor(max === undefined ? minOrMax : max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
