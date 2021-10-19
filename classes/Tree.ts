import { Plant } from './Plant';

export class Tree extends Plant {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  getDescription(): string {
    return `Én egy ${this.name} vagyok, ${this.height} magas és ${
      this.hasRoot ? 'van' : 'nincs'
    } gyökerem`;
  }
}
