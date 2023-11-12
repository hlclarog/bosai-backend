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
import { SistemasModule } from './sistemas/sistemas.module';
import { ConfigModule } from '@nestjs/config';
import app from './config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app],
      envFilePath: ['.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: app().database.host,
      port: app().database.port,
      username: app().database.username,
      password: app().database.password,
      database: app().database.database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: app().database.synchronize,
    }),
    AreasModule,
    SedesModule,
    CargosModule,
    CuentasModule,
    RolesModule,
    SociedadesModule,
    UsuariosModule,
    ComitesModule,
    CiclodocModule,
    SistemasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
