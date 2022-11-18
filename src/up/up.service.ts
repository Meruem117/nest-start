import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Up } from './up.entity'

@Injectable()
export class UpService {
  constructor(
    @InjectRepository(Up)
    private readonly upRepository: Repository<Up>
  ) { }

  findAll(): Promise<Up[]> {
    return this.upRepository.find()
  }

  findAllName(): Promise<Up[]> {
    return this.upRepository.find({
      select: ['name']
    })
  }

  findById(id: number): Promise<Up> {
    return this.upRepository.findOne({
      where: { id: id }
    })
  }
}
