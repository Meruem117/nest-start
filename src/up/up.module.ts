import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UpController } from './up.controller'
import { UpService } from './up.service'
import { Up } from './up'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'abc123',
      database: 'bili',
      entities: ['dist/**/*.entity.js'],
      synchronize: true
    }),
    TypeOrmModule.forFeature([
      Up
    ])
  ],
  controllers: [UpController],
  providers: [UpService],
})

export class UpModule { }
