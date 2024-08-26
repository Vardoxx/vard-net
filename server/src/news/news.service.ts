import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { NewsDto } from './dto/news.dto'
import { News } from './entities/news.entity'
import { Repository } from 'typeorm'

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
  ) {}

  async create(newsDto: NewsDto): Promise<NewsDto> {
    const newPost = await this.newsRepository.save({
      img: newsDto.img,
      description: newsDto.description,
      tags: newsDto.tags || [], // Добавляем пустой массив, если нет тегов
    })

    return {
      id: newPost.id,
      img: newPost.img,
      description: newPost.description,
      tags: newPost.tags, // Возвращаем массив тегов
      createdAt: newPost.createdAt,
    }
  }

  async findAll(): Promise<NewsDto[]> {
    const posts = await this.newsRepository.find()
    return posts.map((post) => ({
      id: post.id,
      img: post.img,
      description: post.description,
      tags: post.tags, // Мапим массив тегов
      createdAt: post.createdAt,
    }))
  }

  async remove(id: number): Promise<void> {
    await this.newsRepository.delete({ id })
  }
}
