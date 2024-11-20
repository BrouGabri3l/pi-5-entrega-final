import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAirportDto {
  @IsString()
  @ApiProperty()
  name: string;
}
