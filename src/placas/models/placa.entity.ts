import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("placas")
export class PlacaEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: "" })
  placa: string

  @Column({ default: "" })
  image: string

  @Column({ default: "" })
  geoDate: string

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date
}
