import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sedes' })
export class Sede {
    @PrimaryGeneratedColumn()
    id_sede: number;
  
    @Column()
    nom_sede: string;
  
    @Column()
    pais_sede: string;
  
    @Column()
    depto_sede: string;
  
    @Column()
    ciudad_sede: string;

    @Column()
    nom_res_sede: string;

    @Column()
    dir_sede: string;

    @Column()
    tel_sede: number;

    @Column()
    estado_sede: string;
}
