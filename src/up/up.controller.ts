import { Controller, Get, Param } from '@nestjs/common'
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

  @Get(':id')
  findById(@Param('id') id: number): Promise<Up> {
    return this.upService.findById(id)
  }
}
