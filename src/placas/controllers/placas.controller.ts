import { DeleteResult, UpdateResult } from "typeorm"
import { PlacaService } from "./../services/feed.service"
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
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

  @Put(":id")
  updatePost(
    @Param("id") id: number,
    @Body() placas: PlacaPost,
  ): Observable<UpdateResult> {
    return this.placaService.updatePost(id, placas)
  }

  @Delete(":id")
  deletePost(@Param("id") id: number): Observable<DeleteResult> {
    return this.placaService.deletePost(id)
  }
}
