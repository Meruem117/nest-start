import { Controller, Get } from '@nestjs/common'
import { UpService } from './up.service'

@Controller('up')
export class UpController {
  constructor(private readonly upService: UpService) { }

  @Get('all')
  getHello(): string {
    return this.upService.getAll()
  }
}
