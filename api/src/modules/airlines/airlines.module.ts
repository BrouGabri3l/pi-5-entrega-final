import { Module } from '@nestjs/common';
import { AirlinesService } from './airlines.service';
import { AirlinesController } from './airlines.controller';
import { Airline } from './entities/airline.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Airline])],
  controllers: [AirlinesController],
  providers: [AirlinesService],
})
export class AirlinesModule {}
