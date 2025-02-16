import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Info } from '../entities/info.entity';
import { CreateInfoInput } from '../dto/create-info.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateInfoInput } from '../dto/update-info.input';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info) private infoRepository: Repository<Info>,
  ) {}

  async create(createInfoInput: CreateInfoInput): Promise<Info> {
    const info = this.infoRepository.create(createInfoInput);
    return this.infoRepository.save(info);
  }

  async findAll(): Promise<Info[]> {
    return this.infoRepository.find();
  }

  async findOne(id: number): Promise<Info> {
    const info = await this.infoRepository.findOneBy({ id });
    if (!info) {
      throw new NotFoundException('Info not found');
    }
    return info;
  }

  async update(id: number, updateInfoInput: UpdateInfoInput): Promise<Info> {
    const info = await this.findOne(id);
    return this.infoRepository.save({ ...info, ...updateInfoInput });
  }

  async remove(id: number): Promise<void> {
    await this.infoRepository.delete(id);
  }
}
