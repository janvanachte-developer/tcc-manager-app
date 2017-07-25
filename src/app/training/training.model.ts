let nextId: number = 1;

export class Training {

  readonly id: number;
  readonly name: string;
  readonly description: string;

  constructor(name: string, description?: string) {

    this.id = nextId++;
    this.name = name;
    this.description = description;
  }
}
