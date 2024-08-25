import { Injectable } from '@nestjs/common'
import { NewsDto } from './dto/news.dto'

@Injectable()
export class NewsService {
  private newsList: NewsDto[] = []

  constructor() {
    this.newsList = [
      {
        id: 1,
        src: '1123123123123123123123',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['blogers'],
      },
      {
        id: 2,
        src: '1123123123123123123123',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['policy'],
      },
      {
        id: 3,
        src: '1123123123123123123123',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['game'],
      },
      {
        id: 4,
        src: '1123123123123123123123',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['policy', 'blogers'],
      },
      {
        id: 5,
        src: '1123123123123123123123',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['policy', 'game'],
      },
    ]
  }

  findAll(): Promise<NewsDto[]> {
    return Promise.resolve(this.newsList)
  }
}
