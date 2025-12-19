import { Controller, Get, HttpCode, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    const message = this.appService.get();
    return message;
  }

  @Get('/teste')
  @Redirect('/')
  getRedirect(): string {
    return this.appService.teste();
  }
}
