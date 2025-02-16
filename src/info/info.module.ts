import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoResolver } from './info.resolver';
import { Info } from './entities/info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Info])],
  providers: [InfoResolver, InfoService],
})
export class InfoModule {}
