import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  img: string

  @Column()
  description: string

  @Column('jsonb', { name: 'tags' })
  tags: string[]

  @CreateDateColumn()
  createdAt: Date
}
