function convertArea(value: number, fromUnit: string, toUnit: string): number {

  const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(100, exponent);
}

console.log(convertArea(1, "dam²", "mm²"))