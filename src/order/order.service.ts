import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const { date, packages, ...orderData } = createOrderDto;

    return this.prismaService.order.create({
      data: {
        ...orderData,
        date: new Date(date), // Convertir fecha a tipo Date
        packages: JSON.stringify(packages), // Guardar el array de objetos como JSON
      },
    });
  }

  findAll() {
    // return `This action returns all order`;
    return this.prismaService.order.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
