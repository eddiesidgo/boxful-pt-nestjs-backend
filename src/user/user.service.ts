import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({ data: createUserDto });
    // return createUserDto;
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
    // return updateUserDto;
  }

  remove(id: string) {
    return this.prismaService.user.delete({ where: { id } });
    // return `This action removes a #${id} user`;
  }
}
