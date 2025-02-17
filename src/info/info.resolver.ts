import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InfoEntity } from './info.entity';
import { InfoService } from './info.service';
import { CreateInfoInput } from './dto/create-info.input';
import { UpdateInfoInput } from './dto/update-info.input';

@Resolver(() => InfoEntity)
export class InfoResolver {
  constructor(private readonly infoService: InfoService) {}

  @Query(() => InfoEntity, { name: 'getinfo' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.infoService.findOne(id);
  }

  @Query(() => [InfoEntity], { name: 'getall' })
  async findAll() {
    return this.infoService.findAll();
  }

  @Mutation(() => InfoEntity)
  async createInfo(@Args('createInfoInput') createInfoInput: CreateInfoInput) {
    return this.infoService.create(createInfoInput);
  }

  @Mutation(() => InfoEntity)
  async updateInfo(@Args('updateInfoInput') updateInfoInput: UpdateInfoInput) {
    return this.infoService.update(updateInfoInput.id, updateInfoInput);
  }

  @Mutation(() => InfoEntity)
  async removeInfo(@Args('id', { type: () => Int }) id: number) {
    return this.infoService.remove(id);
  }
}
