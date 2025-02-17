import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InfoEntity } from './info.entity';
import { InfoService } from './info.service';
import { InfoResolver } from './info.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([InfoEntity])],
  providers: [InfoResolver, InfoService],
})
export class InfoModule {}
