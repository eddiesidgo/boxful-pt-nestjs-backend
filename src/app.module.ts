import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, PrismaModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
