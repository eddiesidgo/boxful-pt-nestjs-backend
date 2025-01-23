// export class CreateUserDto {}
import { User } from '@prisma/client';

// type dto
export type CreateUserDto = Omit<User, 'id'>;
