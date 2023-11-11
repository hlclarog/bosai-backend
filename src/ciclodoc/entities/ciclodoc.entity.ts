import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ciclos' })
export class Ciclodoc {
    @PrimaryGeneratedColumn()
    id_ciclo: number;
  
    @Column()
    nom_ciclo: string;
  
    @Column()
    estado_ciclo: string;
  
}

