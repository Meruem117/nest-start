import { Controller, Get, Param, Query } from '@nestjs/common'
import { UpService } from './up.service'
import { Up } from './up.entity'

@Controller('/up')
export class UpController {
  constructor(private readonly upService: UpService) { }

  @Get('/all')
  findAll(): Promise<Up[]> {
    return this.upService.findAll()
  }

  @Get('/name')
  findAllName(): Promise<Up[]> {
    return this.upService.findAllName()
  }

  @Get('/second')
  findSecond(): Promise<Up[]> {
    return this.upService.findSecond()
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Up> {
    return this.upService.findById(id)
  }

  @Get()
  findByName(@Query() query: { name: string }): Promise<Up> {
    return this.upService.findByName(query.name)
  }
}
