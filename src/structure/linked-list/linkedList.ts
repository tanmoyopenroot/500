import Node from './node';
import Comparator, { compareReturnType } from '../../utils/comparator/comparator';

export default class LinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;
  private comparator: Comparator<T>;

  constructor(compare?: (a: T, b: T) => compareReturnType) {
    this.head = null;
    this.tail = null;
    this.comparator = new Comparator<T>(compare);
  }

  private setHead = (node: Node<T>) => {
    this.head = node;
  }

  private getHead = (): Node<T> => {
    return this.head;
  }

  private setTail = (node: Node<T>) => {
    this.tail = node;
  }

  private getTail = (): Node<T> => {
    return this.tail;
  }

  append = (data: T): this => {
    const node = new Node<T>(data);

    if (!this.getHead()) {
      this.setHead(node);
    }

    if (!this.getTail()) {
      this.setTail(node);
    } else {
      this.getTail().setNext(node);
      this.setTail(node)
    }

    return this
  }

  prepend = (data: T): this => {
    const node = new Node<T>(data);

    if (!this.getTail()) {
      this.setTail(node);
    }

    if (!this.getHead()) {
      this.setHead(node);
    } else {
      node.setNext(this.head);
      this.setHead(node);
    }

    return this
  }

  delete = (data: T): this => {
    let node = this.getHead();
    let prevNode = node;

    if (!node) {
      return this
    }

    if (node && this.comparator.equal(node.get(), data)) {
      this.setHead(node.getNext());
      node = node.getNext();
    }

    while (node) {
      if (this.comparator.equal(node.get(), data)) {
        prevNode.setNext(node.getNext());
      } else {
        prevNode = node;
      }
      node = node.getNext();
    }

    this.setTail(prevNode)
    return this
  }

  deleteFirst = (): this => {
    const head = this.getHead();

    if (!head) {
      return this
    }

    this.setHead(head.getNext())
    return this
  }

  deleteLast = (): this => {
    const tail = this.getTail();
    let node = this.getHead();
    let prevNode = node;

    if (!tail) {
      return this
    }

    if (this.comparator.equal(tail.get(), node.get())) {
      node = null
      this.setHead(node)
      this.setTail(node)
      return this
    }

    while (node.hasNext()) {
      prevNode = node;
      node = node.getNext();
    }

    prevNode.setNext(null)
    this.setTail(prevNode)
    return this

  }

  find = (data: T): null | T => {
    let node = this.getHead();

    if (!node) {
      return null
    }

    while (node) {
      if (this.comparator.equal(node.get(), data)) {
        return node.get()
      }
      node = node.getNext();
    }

    return null
  }

  toArray = (): T[] => {
    let node = this.getHead()
    let nodes: T[] = []
    
    if (!node) {
      return nodes
    }

    while (node) {
      nodes.push(node.get())
      node = node.getNext();
    }

    return nodes
  }
}