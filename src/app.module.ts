import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UpModule } from './up/up.module'
import { VideoModule } from './video/video.module'

@Module({
  imports: [
    UpModule,
    VideoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
