import { Prediction } from '../../predictions/entities/prediction.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'airports' })
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Prediction, (prediction) => prediction.startAirport)
  startPredictions: Prediction[];

  @OneToMany(() => Prediction, (prediction) => prediction.endAirport)
  endPredictions: Prediction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
