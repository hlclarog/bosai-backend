import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cuentas' })
export class Cuenta {
    @PrimaryGeneratedColumn()
    id_cuenta: number;

    @Column()
    nom_cuenta: string;

    @Column()
    rsocial_cuenta: string;

    @Column()
    soc_cuenta: string;

    @Column()
    nit_cuenta: number;

    @Column()
    pais_cuenta: string;

    @Column()
    depto_cuenta: string;

    @Column()
    ciu_cuenta: string;

    @Column()
    tel_cuenta: number;

    @Column()
    dir_cuenta: string;
    
    @Column()
    estado_cuenta: string;  
}
