// let nextId = 1;
export class Space {
  id: number;
  constructor(public name: string, public icon: string, public owner: string, public profiles: any[]) {
    // this.id = nextId++;
  }
}
