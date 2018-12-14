import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateOfDto } from './dtos/create-of.dto';
import { OfsService } from './ofs.service';

@Controller('ofs')
export class OfsController {

  constructor(private readonly ofService: OfsService) {
  }

  @Post()
  create(@Body() createCatDto: CreateOfDto) {
    return this.ofService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.ofService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.ofService.delete(id);
  }
}
