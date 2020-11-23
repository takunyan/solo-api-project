import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  comment: string;

  @Column()
  score: number;
}

export default Restaurant;
