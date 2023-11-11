import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'areas' })
export class Area {
    @PrimaryGeneratedColumn()
    id_area: number;
  
    @Column()
    nom_area: string;
  
    @Column()
    abr_area: string;
  
    @Column()
    desc_area: string;
  
    @Column()
    estado_area: string;
}
