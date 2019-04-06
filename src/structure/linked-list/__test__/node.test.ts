import Node from '../node'

interface IOverides<T> {
  data: T;
  next?: Node<T>;
}

const setup = <T>(overrides: IOverides<T>) => {
  const node = new Node(overrides.data, overrides.next)

  return {
    node,
  }
}

describe('LinkedList Node', () => {
  it('should create a node with a data of type number', () => {
    const { node } = setup({ data: 1 });

    expect(node.get()).toBe(1)
    expect(node.hasNext()).toBeFalsy();
  })

  it('should create a node with a data of type object', () => {
    const data = {
      id: 1,
      value: 'value',
    }
    const { node } = setup({
      data, 
    })

    expect(node.get().id).toBe(1)
    expect(node.hasNext()).toBeFalsy();
  })

  it('should convert node to string', () => {
    const { node } = setup({ data: 1 });

    expect(node.get()).toBe(1)
    expect(node.hasNext()).toBeFalsy();
    expect(node.toString()).toBe('1');
  })

  it('should link nodes together', () => {
    const { node: node2 } = setup({ data: 2 })
    const { node: node1 } = setup({
      data: 1,
      next: node2,
    })

    expect(node1.get()).toBe(1)
    expect(node1.hasNext()).toBe(node2);

    expect(node2.get()).toBe(2)
    expect(node2.hasNext()).toBeFalsy();
  })
})