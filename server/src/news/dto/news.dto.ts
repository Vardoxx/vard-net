import {
  IsArray,
  IsNumber,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator'

export class NewsDto {
  @IsNumber()
  id?: number

  @IsString()
  img: string

  @IsString()
  @MinLength(50)
  @MaxLength(500)
  description: string

  @IsArray()
  tags: string[]

  @IsString()
  createdAt?: Date
}
