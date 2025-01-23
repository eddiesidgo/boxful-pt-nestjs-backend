import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

// export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
export type UpdateOrderDto = Partial<CreateOrderDto>;

// interface Order {
//   id: number;
//   userId: number;
//   total: number;
//   items: OrderItem[];
// }
