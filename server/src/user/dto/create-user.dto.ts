import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Min lenght 6 symbols' })
  @MaxLength(30, { message: 'Man lenght 30 symbols' })
  userName: string

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Min lenght 6 symbols' })
  password: string
}
