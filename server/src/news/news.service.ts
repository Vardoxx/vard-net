import { Injectable } from '@nestjs/common'
import { NewsDto } from './dto/news.dto'

@Injectable()
export class NewsService {
  private newsList: NewsDto[] = []

  constructor() {
    this.newsList = [
      {
        id: 1,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NMLvURzAhu3YoEw4ulaG0OEDyhawqwcEiw&s',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['blogers'],
      },
      {
        id: 2,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCbAaHSD5GW3L0J1Y1RuG8u-XjkO5eTROjA&s',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['policy'],
      },
      {
        id: 3,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQ1688U5qT69NA5r7WjzmJee6OGnGO89jBg&s',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['game'],
      },
      {
        id: 4,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&s',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['policy', 'blogers'],
      },
      {
        id: 5,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYxm30lxbrfH5IFWd3OB96rf4e3Uxv5clcQ&s',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tags: ['policy', 'game'],
      },
    ]
  }

  findAll(): Promise<NewsDto[]> {
    return Promise.resolve(this.newsList)
  }
}
