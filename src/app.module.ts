import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UpController } from './up/up.controller'
import { UpService } from './up/up.service'

@Module({
  imports: [],
  controllers: [AppController, UpController],
  providers: [AppService, UpService],
})
export class AppModule { }
