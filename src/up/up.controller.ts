import { Controller, Get } from '@nestjs/common'
import { UpService } from './up.service'
import { Up } from './up.entity'

@Controller('/up')
export class UpController {
  constructor(private readonly upService: UpService) { }

  @Get('/all')
  findAll(): Promise<Up[]> {
    return this.upService.findAll()
  }
}
