export default class Node<T> {
  private data: T;
  private next: Node<T>;

  constructor(data: T, next:Node<T> = null) {
    this.data = data;
    this.next = next;
  }

  get = (): T => {
    return this.data;
  }

  set = (data: T) => {
    this.data = data;
  }
  
  hasNext = (): Node<T> | boolean => {
    return this.next ? this.next : false
  }

  setNext = (next: Node<T>) => {
    this.next = next
  }

  getNext = (): Node<T> => {
    return this.next;
  }

  toString = (callback?: <R = void>(data: T) => R) => {
    return callback ? callback(this.data) : `${this.data}`
  }
}

