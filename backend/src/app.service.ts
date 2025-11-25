import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  get(): object {
    return {
      msg: 'Testando objetos',
    };
  }

  teste(): string {
    return 'Redirecionando...';
  }
}
