import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'
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

  @IsString()
  @Column()
  img: string

  @MinLength(50)
  @MaxLength(400)
  @IsString()
  @IsNotEmpty()
  @Column()
  description: string

  @IsString()
  @IsNotEmpty()
  @Column('jsonb', { name: 'tags' })
  tags: string[]

  @CreateDateColumn()
  createdAt: Date
}
