import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Up } from './up.entity'

@Injectable()
export class UpService {
  constructor(
    @InjectRepository(Up) private readonly upRepository: Repository<Up>
  ) { }

  async findAll(): Promise<Up[]> {
    return this.upRepository.find()
  }
}
