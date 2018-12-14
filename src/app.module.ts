import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfsModule } from './ofs/ofs.module';

@Module({
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
        useNewUrlParser: true,
      }),
    }),
    OfsModule,
  ],
})
export class AppModule {
}
