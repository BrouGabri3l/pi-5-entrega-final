import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';
import { PredictionStatusEnum } from '../../../core/enums/PredictionStatus.enum';

export class CreatePredictionDto {
  @IsNumber()
  @ApiProperty()
  startAirportId: number;

  @IsNumber()
  @ApiProperty()
  endAirportId: number;

  @IsNumber()
  @ApiProperty()
  airlineId: number;

  @IsEnum(PredictionStatusEnum)
  @ApiProperty()
  status: PredictionStatusEnum;
}
