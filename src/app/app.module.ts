import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsModule } from '../concepts/concepts';
import { ConceptsController } from 'src/concepts/concepts.controller';
import { ConceitosAutomaticoController } from 'src/conceitos-automatico/conceitos-automatico.controller';

@Module({
  imports: [ConceptsModule],
  controllers: [AppController, ConceptsController, ConceitosAutomaticoController],
  providers: [AppService],
  exports: [],
})

export class AppModule {}
