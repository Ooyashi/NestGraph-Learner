import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InfoEntity } from './info.entity';
import { CreateInfoInput } from './dto/create-info.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateInfoInput } from './dto/update-info.input';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(InfoEntity)
    private infoRepository: Repository<InfoEntity>,
  ) {}

  async create(createInfoInput: CreateInfoInput): Promise<InfoEntity> {
    const info = this.infoRepository.create(createInfoInput);
    return this.infoRepository.save(info);
  }

  async findAll(): Promise<InfoEntity[]> {
    return this.infoRepository.find();
  }

  async findOne(id: number): Promise<InfoEntity> {
    const info = await this.infoRepository.findOneBy({ id });
    if (!info) {
      throw new NotFoundException('Info not found');
    }
    return info;
  }

  async update(
    id: number,
    updateInfoInput: UpdateInfoInput,
  ): Promise<InfoEntity> {
    const info = await this.findOne(id);
    return this.infoRepository.save({ ...info, ...updateInfoInput });
  }

  async remove(id: number): Promise<void> {
    await this.infoRepository.delete(id);
  }
}
