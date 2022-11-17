import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UpController } from './up.controller'
import { UpService } from './up.service'
import { Up } from './up'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Up
    ])
  ],
  controllers: [UpController],
  providers: [UpService],
})

export class UpModule { }
