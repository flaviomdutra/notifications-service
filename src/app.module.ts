import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';
import { MesssagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [HttpModule, DatabaseModule, MesssagingModule],
})
export class AppModule {}
