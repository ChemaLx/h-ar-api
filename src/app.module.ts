import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { LugaresModule } from './lugares/lugares.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/h-ar-db'), LugaresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
