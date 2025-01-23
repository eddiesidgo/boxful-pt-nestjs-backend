import {
  IsArray,
  IsString,
  IsOptional,
  ValidateNested,
  IsEmail,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreatePackageDto {
  @IsString()
  length: string;

  @IsString()
  width: string;

  @IsString()
  height: string;

  @IsString()
  content: string;
}

export class CreateOrderDto {
  @IsString()
  collectionAddress: string;

  @IsString()
  date: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  recipientAddress: string;

  @IsString()
  department: string;

  @IsString()
  municipality: string;

  @IsOptional()
  @IsString()
  referencePoint: string;

  @IsOptional()
  @IsString()
  instructions: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePackageDto)
  packages: CreatePackageDto[];
}
