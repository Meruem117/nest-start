import { Module } from '@nestjs/common'
import { UpController } from './up.controller'
import { UpService } from './up.service'

@Module({
  controllers: [UpController],
  providers: [UpService],
})

export class UpModule { }
