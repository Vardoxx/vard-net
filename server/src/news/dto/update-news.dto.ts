import { PartialType } from '@nestjs/mapped-types'
import { NewsDto } from './news.dto'

export class UpdateNewsDto extends PartialType(NewsDto) {}
