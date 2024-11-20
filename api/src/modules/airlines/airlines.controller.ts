import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AirlinesService } from './airlines.service';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';

@Controller('airlines')
export class AirlinesController {
  constructor(private readonly airlinesService: AirlinesService) {}

  @Post()
  async create(@Body() createAirlineDto: CreateAirlineDto) {
    return await this.airlinesService.create(createAirlineDto);
  }

  @Get()
  async findAll() {
    return await this.airlinesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.airlinesService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAirlineDto: UpdateAirlineDto,
  ) {
    return await this.airlinesService.update(+id, updateAirlineDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.airlinesService.remove(+id);
  }
}
