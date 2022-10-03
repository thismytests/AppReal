import { Module } from '@nestjs/common';

import { ConfigModule } from './commons/config';

// logger
import { AppLogger } from './commons/logger';

// routes
import { TodolistModule } from './routes/todolist';
import { LoginModule } from './routes/login';

@Module({
  imports: [
    // config
    ConfigModule,

    // routes
    TodolistModule,
    LoginModule
  ],
  providers: [AppLogger],
})
export class AppModule {
  constructor(public appLogger: AppLogger) {
    // this.appLogger.log(process.env);
  }
}
