let nextId: number = 1;

export class Training {

  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  active: boolean;

  constructor(name: string, description: string, imageUrl: string, active = true) {

    this.id = nextId++;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.active = active;
  }
}
