import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Info } from '../entities/info.entity';
import { InfoService } from '../services/info.service';
import { CreateInfoInput } from '../dto/create-info.input';
import { UpdateInfoInput } from '../dto/update-info.input';

@Resolver(() => Info)
export class InfoResolver {
  constructor(private readonly infoService: InfoService) {}

  @Query(() => Info, { name: 'Get an info' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.infoService.findOne(id);
  }

  @Query(() => [Info], { name: 'Get all Infos' })
  async findAll() {
    return this.infoService.findAll();
  }

  @Mutation(() => Info)
  async createInfo(@Args('createInfoInput') createInfoInput: CreateInfoInput) {
    return this.infoService.create(createInfoInput);
  }

  @Mutation(() => Info)
  async updateInfo(@Args('updateInfoInput') updateInfoInput: UpdateInfoInput) {
    return this.infoService.update(updateInfoInput.id, updateInfoInput);
  }

  @Mutation(() => Info)
  async removeInfo(@Args('id', { type: () => Int }) id: number) {
    return this.infoService.remove(id);
  }
}
