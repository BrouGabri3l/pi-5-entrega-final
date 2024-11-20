import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AirportsService } from './airports.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

@Controller('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Post()
  async create(@Body() createAirportDto: CreateAirportDto) {
    return await this.airportsService.create(createAirportDto);
  }

  @Get()
  async findAll() {
    return await this.airportsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.airportsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAirportDto: UpdateAirportDto,
  ) {
    return await this.airportsService.update(+id, updateAirportDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.airportsService.remove(+id);
  }
}
