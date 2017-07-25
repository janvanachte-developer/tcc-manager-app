let nextId: number = 0;

export class Training {

  private readonly id: number;
  private readonly name: string;
  private readonly description: string;

  constructor(name: string, description?: string) {

    this.id = nextId++;
    this.name = name;
    this.description = description;
  }
}
