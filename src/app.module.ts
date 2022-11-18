import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UpModule } from './up/up.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'abc123',
      database: 'bili',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
