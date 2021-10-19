import { IPlants } from '../interfaces/IPlants';

export class Plant implements IPlants {
  hasRoot: boolean;
  height: number;
  constructor() {
    this.height = this.getHeight();
    this.hasRoot = this.height > 28;
  }
  getHeight(): number {
    return Math.floor(Math.random() * (30 - 20) + 20);
  }
}
var a = new Plant();
console.log(a);
