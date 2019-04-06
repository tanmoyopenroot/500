export type compareReturnType = 0 | 1 | -1;

export default class Comparator<T> {
  public compare: (a: T, b: T) => compareReturnType;

  constructor(compare?: (a: T, b: T) => compareReturnType) {
    this.compare = compare ? compare : this.defaultCompare;
  }

  private defaultCompare = (a: T, b: T): compareReturnType => {
    if (a === b) {
      return 0;
    }

    return a > b ? 1 : -1;
  }

  equal = (a: T, b: T): boolean => {
    return this.compare(a, b) === 0;
  }
}