import { Controller, Get } from '@nestjs/common'
import { UpService } from './up.service'
import { Up } from './up'

@Controller('up')
export class UpController {
  constructor(private readonly upService: UpService) { }

  @Get('/all')
  async findAll(): Promise<Up[]> {
    return await this.upService.findAll()
  }
}
