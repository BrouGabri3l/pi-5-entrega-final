import { Injectable } from '@nestjs/common';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Airport } from './entities/airport.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AirportsService {
  constructor(
    @InjectRepository(Airport)
    private readonly airportRepository: Repository<Airport>,
  ) {}

  async create(createAirportDto: CreateAirportDto) {
    return await this.airportRepository.insert(createAirportDto);
  }

  async findAll() {
    return await this.airportRepository.find({ where: { deletedAt: null } });
  }

  async findOne(id: number) {
    return await this.airportRepository.findOneBy({ id });
  }

  async update(id: number, updateAirportDto: UpdateAirportDto) {
    return await this.airportRepository.update({ id }, updateAirportDto);
  }

  async remove(id: number) {
    return await this.airportRepository.softDelete(id);
  }
}
