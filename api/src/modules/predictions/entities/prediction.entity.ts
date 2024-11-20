import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Airport } from '../../airports/entities/airport.entity';
import { Airline } from '../../airlines/entities/airline.entity';
import { PredictionStatusEnum } from '../../../core/enums/PredictionStatus.enum';

@Entity({ name: 'predictions' })
export class Prediction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Airport, (airport) => airport.startPredictions)
  @JoinColumn({ name: 'startAirportId' })
  startAirport: Airport;

  @ManyToOne(() => Airport, (airport) => airport.endPredictions)
  @JoinColumn({ name: 'endAirportId' })
  endAirport: Airport;

  @ManyToOne(() => Airline, (airline) => airline.predictions)
  @JoinColumn({ name: 'airlineId' })
  airline: Airline;

  @Column({ enum: PredictionStatusEnum })
  status: PredictionStatusEnum;

  @Column({ nullable: true })
  isAccurate?: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
