import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [UsersModule, JobsModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
