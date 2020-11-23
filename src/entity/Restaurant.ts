import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column({ nullable: true })
  comment: string;

  @Column({ nullable: true })
  score: number;
}

export default Restaurant;
