import { Injectable } from '@nestjs/common';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Airline } from './entities/airline.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AirlinesService {
  constructor(
    @InjectRepository(Airline)
    private readonly airlineRepository: Repository<Airline>,
  ) {}

  async create(createAirlineDto: CreateAirlineDto) {
    return await this.airlineRepository.insert(createAirlineDto);
  }

  async findAll() {
    return await this.airlineRepository.find({ where: { deletedAt: null } });
  }

  async findOne(id: number) {
    return await this.airlineRepository.findOneBy({ id });
  }

  async update(id: number, updateAirlineDto: UpdateAirlineDto) {
    return await this.airlineRepository.update({ id }, updateAirlineDto);
  }

  async remove(id: number) {
    return await this.airlineRepository.softDelete(id);
  }
}
