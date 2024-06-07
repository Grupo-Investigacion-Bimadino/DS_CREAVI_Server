import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { NotesModule } from './notes/notes.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TeamModule } from './team/team.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TasksModule,
    NotesModule,
    NotificationsModule,
    TeamModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class ColaborativeTeamsModule {}
