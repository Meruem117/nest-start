import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('up')
export class Up {
  @PrimaryGeneratedColumn() id: number
  @Column() mid: string
  @Column() name: string
}
