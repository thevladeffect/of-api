import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OfsController } from './ofs.controller';
import { OfsService } from './ofs.service';
import { OfSchema } from './schemas/of.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Of', schema: OfSchema }])],
  controllers: [OfsController],
  providers: [OfsService],
})
export class OfsModule {
}
