let nextId: number = 1;

export class Item {

  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  nextRun: Date;
  active: boolean;

  constructor(name: string, description: string, imageUrl: string, nextRun: Date, active = true) {

    this.id = nextId++;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.nextRun = nextRun;
    this.active = active;
  }
}
