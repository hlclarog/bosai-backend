import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cargos' })
export class Cargo {
    @PrimaryGeneratedColumn()
    id_cargo: number;
    
    @Column()
    nom_cargo: string;

    @Column()
    proc_pri_cargo: string;

    @Column()
    num_usu_cargo: number;

    @Column()
    jefe_cargo: string;

    @Column()
    estado_cargo: string;
}
