import { PlacaService } from "./services/feed.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Module } from "@nestjs/common"
import { PlacaEntity } from "./models"
import { PlacaController } from "./controllers/placas.controller"

@Module({
  imports: [TypeOrmModule.forFeature([PlacaEntity])],
  providers: [PlacaService],
  controllers: [PlacaController],
})
export class PlacasModule {}
