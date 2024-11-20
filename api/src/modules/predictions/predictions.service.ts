import { Injectable } from '@nestjs/common';
import { CreatePredictionDto } from './dto/create-prediction.dto';
import { UpdatePredictionDto } from './dto/update-prediction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prediction } from './entities/prediction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PredictionsService {
  constructor(
    @InjectRepository(Prediction)
    private readonly predictionRepository: Repository<Prediction>,
  ) {}

  async create(createPredictionDto: CreatePredictionDto) {
    return await this.predictionRepository.insert({
      ...createPredictionDto,
      airline: { id: createPredictionDto.airlineId },
      startAirport: { id: createPredictionDto.startAirportId },
      endAirport: { id: createPredictionDto.endAirportId },
    });
  }

  async findAll() {
    return await this.predictionRepository.find({ where: { deletedAt: null } });
  }

  async findOne(id: number) {
    return await this.predictionRepository.findOne({
      where: { id },
      loadEagerRelations: true,
    });
  }

  async update(id: number, updatePredictionDto: UpdatePredictionDto) {
    return await this.predictionRepository.update(
      { id },
      {
        ...updatePredictionDto,
        airline: { id: updatePredictionDto.airlineId },
        startAirport: { id: updatePredictionDto.startAirportId },
        endAirport: { id: updatePredictionDto.endAirportId },
      },
    );
  }

  async remove(id: number) {
    return await this.predictionRepository.softDelete(id);
  }
}
