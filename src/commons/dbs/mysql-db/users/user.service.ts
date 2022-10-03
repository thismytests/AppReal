import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Users>,
  ) {
  }

  async findUserByLoginAndPassword(login: string, password: string): Promise<{
    id: number,
    login: string,
    password: string,
    firstname: string,
  }> {
    return this.userRepository.findOne({
      where: {
        login,
        password,
      },
    });
  }
}
