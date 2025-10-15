import { Controller, Get } from "@nestjs/common";

@Controller('concepts')
export class ConceptsController {
    
    @Get()
    home(): string {
        return 'Concepts home route!';
    }
}