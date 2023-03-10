import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
  @PrimaryKey({ type: 'number'})
  id!: number;

  @Property({ type: 'date', default: 'NOW()' })
  createdAt? = new Date();

  @Property({ type: 'date', onUpdate: () => new Date(), default: 'NOW()' })
  updatedAt? = new Date();

  @Property({ type: 'text'})
  title!: string;
}