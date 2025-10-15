import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsModule } from '../concepts/concepts';

@Module({
  imports: [ConceptsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})

export class AppModule {}
