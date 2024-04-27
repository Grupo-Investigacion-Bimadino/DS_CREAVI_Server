import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { RoomModule } from './room/room.module';
import { AuthModule } from './auth/auth.module';
import { ElementModule } from './element/element.module';
import { VersionModule } from './version/version.module';
import { HistoriesModule } from './histories/histories.module';
import { Structure } from './structures/structure.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ChatModule,
    RoomModule,
    AuthModule,
    ElementModule,
    VersionModule,
    HistoriesModule,
    Structure,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
