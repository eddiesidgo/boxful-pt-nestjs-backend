import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [OrdersModule, UserModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
