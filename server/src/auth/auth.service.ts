import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { IUser } from 'src/types/types'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<IUser | null> {
    try {
      const user = await this.userService.findOne(email)

      if (!user) {
        throw new UnauthorizedException('User not found')
      }

      const passwordIsMatch = await argon2.verify(user.password, password)

      if (!passwordIsMatch) {
        throw new UnauthorizedException('Incorrect password')
      }

      return user
    } catch (error) {
      console.error('Authentication error:', error)
      throw new UnauthorizedException('Invalid credentials')
    }
  }

  async login(
    user: IUser,
  ): Promise<{ token: string; user: Omit<IUser, 'password'> }> {
    try {
      const { id, email, userName, role } = user
      const payload = {
        id,
        email,
        userName,
        role,
      }
      const token = this.jwtService.sign(payload)
      return { token, user: { id, email, userName, role } }
    } catch (error) {
      console.error('Login error:', error)
      throw new UnauthorizedException('Failed to generate token')
    }
  }
}
