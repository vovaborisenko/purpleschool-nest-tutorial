import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Post('create')
  async create(@Body() dto: Omit<TopPageController, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.configService.get('TEST') + id;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}
