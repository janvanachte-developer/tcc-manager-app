import {Item} from "./item.model";

export const ITEMS:Item[] =   [
  new Item("Angular Introduction", "Angular for dummies","assets/images/keyboard01.jpeg",new Date(2017, 10,1)),
  new Item("Angular Profesional", "Angular for HelloWorld developers","assets/images/keyboard02.jpeg",new Date(2017, 6,28)),
  new Item("Angular Enterprise", "Angular for enterprise developers","assets/images/keyboard03.jpeg",new Date(2017, 10,3)),
  new Item("Angular Guru", "Angular for Angular gurus","assets/images/keyboard04.jpeg",new Date(2016, 10,4), false),
  new Item("Angular Trainer", "Angular for Angular trainers","assets/images/keyboard05.jpeg",new Date(2017, 7,1))
]
