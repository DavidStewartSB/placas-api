import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { PlacasModule } from "./placas/placas.module"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "placas",
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlacasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
