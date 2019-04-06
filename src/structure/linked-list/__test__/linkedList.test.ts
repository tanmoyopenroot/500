import LinkedList from '../linkedList'
import { compareReturnType } from 'utils/comparator/comparator'

interface IOverides<T> {
  compare?: (a: T, b: T) => compareReturnType;
}

const setup = <T>(overrides: IOverides<T> = {}) => {
  const linkedList = new LinkedList(overrides.compare)

  return {
    linkedList,
  }
}

describe('LinkedList', () => {
  it('should ouput the nodes as an array', () => {
    const { linkedList } = setup()

    expect(linkedList.toArray()).toEqual([])
    linkedList
      .append(1)
      .append(2)
      .append(3)
      .prepend(4)
      .prepend(5)
      .prepend(6)
    expect(linkedList.toArray()).toEqual([6, 5, 4, 1, 2, 3])  
  })

  it('should delete data', () => {
    interface IData {
      id: number;
      value: number;
    }
    const compare = (a: IData, b: IData): compareReturnType => {
      if (a.value === b.value) {
        return 0;
      }

      return a.value > b.value ? 1 : -1;
    }
    const { linkedList } = setup<IData>({
      compare,
    })

    linkedList
      .append({
        id: 1,
        value: 1,
      })
      .append({
        id: 2,
        value: 2,
      })
      .append({
        id: 3,
        value: 3,
      })

    expect(linkedList.toArray()).toEqual([{
      id: 1,
      value: 1,
    }, {
      id: 2,
      value: 2,
    }, {
      id: 3,
      value: 3,
    }])

    expect(linkedList.delete({
      id: 2,
      value: 2,
    }).toArray()).toEqual([{
      id: 1,
      value: 1,
    }, {
      id: 3,
      value: 3,
    }])
  })
})

it('should delete data from first', () => {
  interface IData {
    id: number;
    value: number;
  }
  const compare = (a: IData, b: IData): compareReturnType => {
    if (a.value === b.value) {
      return 0;
    }

    return a.value > b.value ? 1 : -1;
  }
  const { linkedList } = setup<IData>({
    compare,
  })

  linkedList
    .append({
      id: 1,
      value: 1,
    })

  expect(linkedList.deleteFirst().toArray()).toEqual([])

  linkedList
    .append({
      id: 1,
      value: 1,
    })
    .append({
      id: 2,
      value: 2,
    })

    expect(linkedList.deleteFirst().toArray()).toEqual([{
      id: 2,
      value: 2,
    }])
})

it('should delete data from last', () => {
  interface IData {
    id: number;
    value: number;
  }
  const compare = (a: IData, b: IData): compareReturnType => {
    if (a.value === b.value) {
      return 0;
    }

    return a.value > b.value ? 1 : -1;
  }
  const { linkedList } = setup<IData>({
    compare,
  })

  linkedList
    .append({
      id: 1,
      value: 1,
    })

  expect(linkedList.deleteLast().toArray()).toEqual([])

  linkedList
    .append({
      id: 1,
      value: 1,
    })
    .append({
      id: 2,
      value: 2,
    })

    expect(linkedList.deleteLast().toArray()).toEqual([{
      id: 1,
      value: 1,
    }])
})

it('should find the data', () => {
  interface IData {
    id: number;
    value: number;
  }
  const compare = (a: IData, b: IData): compareReturnType => {
    if (a.value === b.value) {
      return 0;
    }

    return a.value > b.value ? 1 : -1;
  }
  const { linkedList } = setup<IData>({
    compare,
  })

  linkedList
    .append({
      id: 1,
      value: 1,
    })
    .append({
      id: 2,
      value: 2,
    })

    expect(linkedList.find({
      id: 1,
      value: 1,
    })).toEqual({
      id: 1,
      value: 1,
    })
})