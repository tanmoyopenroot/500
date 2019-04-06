import Comparator, { compareReturnType } from '../comparator';

interface IOverrides<T> {
  compare?: (a: T, b: T) => compareReturnType;
}

const setup = <T>(overrides: IOverrides<T> = {}) => {
  const comparator = new Comparator<T>(overrides.compare)

  return {
    comparator,
  }
}

describe('Compare Function', () => {
  it('should compare where data is of type number', () => {
    const { comparator } = setup<number>()

    expect(comparator.compare(1, 2)).toEqual(-1)
    expect(comparator.compare(3, 2)).toEqual(1)
    expect(comparator.equal(2, 2)).toBeTruthy()
  })

  it('should compare where data is of type object', () => {
    interface IData {
      id: number;
      value: number;
    }
    const data1: IData = {
      id: 1,
      value: 1,
    }
    const data2: IData = {
      id: 2,
      value: 2,
    }
    const compare = (a: IData, b: IData): compareReturnType => {
      if (a.value === b.value) {
        return 0;
      }

      return a.value > b.value ? 1 : -1;
    }
    const { comparator } = setup<IData>({
      compare,
    })

    expect(comparator.compare(data1, data2)).toEqual(-1)
    expect(comparator.compare(data2, data1)).toEqual(1)
    expect(comparator.equal(data2, data2)).toBeTruthy()
  })
})