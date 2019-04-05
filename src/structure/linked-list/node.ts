export default class Node<T> {
  private value: T;
  private next: Node<T>;

  constructor(value: T, next:Node<T>  = null) {
    this.value = value;
    this.next = next;
  }

  get = (): T => {
    return this.value;
  }

  set = (value: T) => {
    this.value = value;
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

  toString = (callback?: <R = void>(value: T) => R) => {
    return callback ? callback(this.value) : `${this.value}`
  }
}

