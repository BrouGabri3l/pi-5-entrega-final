import { PartialType } from '@nestjs/mapped-types';
import { CreatePredictionDto } from './create-prediction.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePredictionDto extends PartialType(CreatePredictionDto) {
  @ApiProperty()
  isAccurate?: boolean;
}
