import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import { UpdatePredictionDto } from './dto/update-prediction.dto';

@Controller('predictions')
export class PredictionsController {
  constructor(private readonly predictionsService: PredictionsService) {}

  @Post()
  async create(@Body() createPredictionDto: CreatePredictionDto) {
    return await this.predictionsService.create(createPredictionDto);
  }

  @Get()
  async findAll() {
    return await this.predictionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.predictionsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePredictionDto: UpdatePredictionDto,
  ) {
    return await this.predictionsService.update(+id, updatePredictionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.predictionsService.remove(+id);
  }
}
