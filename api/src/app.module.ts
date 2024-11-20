import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AirlinesModule } from './modules/airlines/airlines.module';
import { AirportsModule } from './modules/airports/airports.module';
import { PredictionsModule } from './modules/predictions/predictions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get<string>('DATABASE_HOST'),
        database: ConfigService.get<string>('DATABASE_NAME'),
        username: ConfigService.get<string>('DATABASE_USER'),
        password: ConfigService.get<string>('DATABASE_PASSWORD'),
        port: ConfigService.get<number>('DATABASE_PORT'),
        autoLoadEntities: true,
        synchronize: true,
        ssl: true,
      }),
    }),
    AirlinesModule,
    AirportsModule,
    PredictionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
