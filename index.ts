import { Tree } from './classes/Tree';

const trees: string[] = [
  'cseresznyefa',
  'szilvafa',
  'banánfa',
  'fügefa',
  'almafa',
];
class xd extends Tree {
  random: number = Math.floor(Math.random() * (5 - 0) + 0);
  name: string;
  getName(): string {
    return trees[this.random];
  }
  constructor() {
    super('xd');
    this.name = this.getName();
  }
}
for(var i = 0; i < 1;i++)
{
  var a = new xd();
  console.log(a);  
}
var kekw = document.getElementById('app');