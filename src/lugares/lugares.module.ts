import { Module } from '@nestjs/common';
import { LugaresController } from './lugares.controller';
import { LugaresService } from './lugares.service';
import { LugaresSchema } from './schema/lugares.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'Lugares', schema: LugaresSchema}
    ]
  )],
  controllers: [LugaresController],
  providers: [LugaresService],
})
export class LugaresModule {}
