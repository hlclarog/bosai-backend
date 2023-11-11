import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';
import { SedesModule } from './sedes/sedes.module';
import { CargosModule } from './cargos/cargos.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { RolesModule } from './roles/roles.module';
import { SociedadesModule } from './sociedades/sociedades.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComitesModule } from './comites/comites.module';
import { CiclodocModule } from './ciclodoc/ciclodoc.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'bosai',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  AreasModule,
  SedesModule,
  CargosModule,
  CuentasModule,
  RolesModule,
  SociedadesModule,
  UsuariosModule,
  ComitesModule,
  CiclodocModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
