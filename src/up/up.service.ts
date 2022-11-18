import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Like, Repository } from 'typeorm'
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

  findSecond(): Promise<Up[]> {
    return this.upRepository.find({
      skip: 1,
      take: 3,
      order: {
        id: 'desc'
      }
    })
  }

  findById(id: number): Promise<Up> {
    return this.upRepository.findOne({
      where: { id: id }
    })
  }

  findByName(name: string): Promise<Up> {
    return this.upRepository.findOne({
      where: { name: Like(`%${name}%`) }
    })
  }
}
