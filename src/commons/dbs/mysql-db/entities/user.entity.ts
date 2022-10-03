import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// swagger
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  synchronize: false,
})
export class Users {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({})
  login: string;

  @Column({})
  password: string;

  @Column({})
  firstname: string;

  @Column({})
  lastname: string;
}
