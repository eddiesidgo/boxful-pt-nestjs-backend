import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}
export type UpdateUserDto = Partial<CreateUserDto>;
