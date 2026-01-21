import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sensor")
export class Sensor {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", unique: true, nullable: false })
    serialNumber: string;

    @Column({ type: "varchar", nullable: false })
    nome: string;

    @Column({ type: "varchar", nullable: true })
    descricao?: string;

}