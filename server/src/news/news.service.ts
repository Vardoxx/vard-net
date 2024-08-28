import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
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
    if (!newsDto.tags || !newsDto.tags.length) {
      throw new BadRequestException('NewsPost.tag must be at least one tag')
    }

    if (newsDto.description.length < 50 || newsDto.description.length > 500) {
      throw new BadRequestException(
        'NewsPost.description input rules is wrong!',
      )
    }

    const newPost = await this.newsRepository.save({
      img: newsDto.img,
      description: newsDto.description,
      tags: newsDto.tags,
    })

    return {
      img: newPost.img,
      description: newPost.description,
      tags: newPost.tags,
      createdAt: newPost.createdAt,
    }
  }

  async findAll(): Promise<NewsDto[]> {
    const posts = await this.newsRepository.find()
    return posts.map((post) => ({
      id: post.id,
      img: post.img,
      description: post.description,
      tags: post.tags,
      createdAt: post.createdAt,
    }))
  }

  async remove(id: number): Promise<void> {
    const deletedCount = await this.newsRepository.delete(id)
    if (!deletedCount) {
      throw new NotFoundException(`New with ID ${id} not found`)
    }
  }
}
