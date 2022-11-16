import { Injectable } from '@nestjs/common'

@Injectable()
export class UpService {
  getAll(): string {
    return 'All ups'
  }
}
