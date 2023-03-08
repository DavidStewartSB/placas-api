import { PlacaPost } from "./../models/placa.interface"
import { Injectable } from "@nestjs/common"
import { DeleteResult, Repository, UpdateResult } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { from, Observable } from "rxjs"
import { PlacaEntity } from "../models"

@Injectable()
export class PlacaService {
  constructor(
    @InjectRepository(PlacaEntity)
    private readonly placaRepository: Repository<PlacaPost>,
  ) {}

  createPost(placaPost: PlacaPost): Observable<PlacaPost> {
    return from(this.placaRepository.save(placaPost))
  }

  getAll(): Observable<PlacaPost[]> {
    return from(this.placaRepository.find())
  }
  getOne(placaPost: PlacaPost): Observable<PlacaPost> {
    return from(this.placaRepository.findOneBy(placaPost))
  }

  updatePost(placaId: number, placaPost: PlacaPost): Observable<UpdateResult> {
    return from(this.placaRepository.update(placaId, placaPost))
  }

  deletePost(placaId: number): Observable<DeleteResult> {
    return from(this.placaRepository.delete(placaId))
  }
}
