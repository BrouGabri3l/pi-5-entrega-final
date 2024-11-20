import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAirlineDto {
  @IsString()
  @ApiProperty()
  name: string;
}
