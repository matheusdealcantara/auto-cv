import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  get(): object {
    return { message: 'Hello World!' };
  }

  teste(): string {
    return 'teste';
  }
}
