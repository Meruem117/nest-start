import { Module } from '@nestjs/common'
import { Connection } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UpController } from './up/up.controller'
import { UpService } from './up/up.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'niit1234',
      database: 'bili',
      entities: ['dist/**/*.entity.js'],
      synchronize: true
    })
  ],
  controllers: [AppController, UpController],
  providers: [AppService, UpService],
})

export class AppModule {
  constructor(private connection: Connection) { }
}
