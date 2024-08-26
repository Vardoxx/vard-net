import { Controller, Post, Body, Delete, Get, Param } from '@nestjs/common'
import { NewsService } from './news.service'
import { NewsDto } from './dto/news.dto'

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async create(@Body() createNewsDto: NewsDto): Promise<NewsDto> {
    const createdNews = await this.newsService.create(createNewsDto)
    return createdNews
  }

  @Get()
  async findAll(): Promise<NewsDto[]> {
    const news = await this.newsService.findAll()
    return news
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.newsService.remove(Number(id))
  }
}
