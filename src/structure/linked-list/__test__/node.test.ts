import Node from '../node'

interface IOverides<T> {
  value: T;
  next?: Node<T>;
}

const setup = <T>(overrides: IOverides<T>) => {
  const node = new Node(overrides.value, overrides.next)

  return {
    node,
  }
}

describe('LinkedList Node', () => {

  it('should create a node with a value of type number', () => {
    const { node } = setup({ value: 1 });

    expect(node.get()).toBe(1)
    expect(node.hasNext()).toBeFalsy();
  })

  it('should create a node with a value of type object', () => {
    const value = {
      id: 1,
      data: 'data',
    }
    const { node } = setup({
      value, 
    })

    expect(node.get().id).toBe(1)
    expect(node.hasNext()).toBeFalsy();
  })

  it('should convert node to string', () => {
    const { node } = setup({ value: 1 });

    expect(node.get()).toBe(1)
    expect(node.hasNext()).toBeFalsy();
    expect(node.toString()).toBe('1');
  })

  it('should link nodes together', () => {
    const { node: node2 } = setup({ value: 2 })
    const { node: node1 } = setup({
      value: 1,
      next: node2,
    })

    expect(node1.get()).toBe(1)
    expect(node1.hasNext()).toBe(node2);

    expect(node2.get()).toBe(2)
    expect(node2.hasNext()).toBeFalsy();
  })
})