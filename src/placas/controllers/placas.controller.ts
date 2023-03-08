import { PlacaService } from "./../services/feed.service"
import { Body, Controller, Get, Post } from "@nestjs/common"
import { Observable } from "rxjs"
import { PlacaPost } from "../models"

@Controller("placas")
export class PlacaController {
  constructor(private placaService: PlacaService) {}

  @Post()
  create(@Body() placas: PlacaPost): Observable<PlacaPost> {
    return this.placaService.createPost(placas)
  }

  @Get()
  getAll(): Observable<PlacaPost[]> {
    return this.placaService.getAll()
  }

  @Get(":id")
  getOne(placa: PlacaPost): Observable<PlacaPost> {
    return this.placaService.getOne(placa)
  }
}
