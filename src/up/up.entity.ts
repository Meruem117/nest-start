import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Up {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  mid: string

  @Column()
  name: string
}
