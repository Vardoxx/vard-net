import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existEmail = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    })
    const existUserName = await this.userRepository.findOne({
      where: {
        userName: createUserDto.userName,
      },
    })
    if (existEmail)
      throw new BadRequestException(
        `Email: "${createUserDto.email}" already exist`,
      )
    if (existUserName)
      throw new BadRequestException(
        `UserName: "${createUserDto.userName}" already exist`,
      )

    const user = await this.userRepository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
      userName: createUserDto.userName,
      role: 'user',
    })
    const token = this.jwtService.sign({ email: createUserDto.email })

    return { user, token }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async remove(id: number): Promise<void> {
    const deletedCount = await this.userRepository.delete(id)
    if (!deletedCount) {
      throw new NotFoundException(`User with ID: ${id} not found`)
    }
  }

  async findOne(email: string): Promise<User | null> {
    return (
      (await this.userRepository.findOne({ where: { email: email } })) || null
    )
  }
}
